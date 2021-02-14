package main

import (
	"math/rand"

	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"

	pb "github.com/robstein/games/server/proto"
)

type Game struct {
	userLimit      int
	users          *UserSet
	whoseMoveId    string
	flattenedArray string
	status         pb.GameStatus
}

func newGame(numPlayers uint32) *Game {
	return &Game{
		users:       newUserSet(),
		userLimit:   int(numPlayers),
		status:      pb.GameStatus_WAITING_FOR_PLAYERS,
		whoseMoveId: "",
	}
}

func (g *Game) AssignNewUser(username string) (string, error) {
	if g.users.Size() >= g.userLimit {
		return "", status.Error(codes.FailedPrecondition, "Game full")
	}
	if g.users.Contains(username) {
		return "", status.Error(codes.AlreadyExists, "someone in that game with that username already exists")
	}
	g.users.Add(username)
	if g.users.Size() >= g.userLimit {
		g.startGame()
	}
	return username, nil
}

func (g *Game) startGame() {
	g.whoseMoveId = g.users.AtIndex(rand.Intn(1))
	g.flattenedArray = "---------"
	g.status = pb.GameStatus_STARTED
}

// 0,2 1,2 2,2
// 0,1 1,1 2,1  == > 0,0 1,0 2,0 0,1 1,1 2,1 0,2 1,2 2,2
// 0,0 1,0 2,0
func (g *Game) update(username string, move *pb.Move) error {
	ticTacToeMove := move.GetTicTacToeMove()
	if ticTacToeMove == nil {
		return status.Error(codes.InvalidArgument, "TicTacToeMove can not be empty")
	}

	if g.whoseMoveId != username {
		return status.Error(codes.FailedPrecondition, "It's not your turn")
	}

	x := ticTacToeMove.GetX()
	y := ticTacToeMove.GetY()
	index := x + 3*y

	if len(g.flattenedArray) < 9 {
		return status.Error(codes.Internal, "TicTacToe game is not set up properly")
	}

	if string(g.flattenedArray[index]) != "-" {
		return status.Error(codes.FailedPrecondition, "Move is not valid: the spot is already taken")
	}

	playerChar := "x"
	if g.users.internalOrderedArray[0] != g.whoseMoveId {
		playerChar = "o"
	}

	newString := ""
	for i, ch := range g.flattenedArray {
		if i == int(index) {
			newString = newString + playerChar
		} else {
			newString = newString + string(ch)
		}
	}

	g.flattenedArray = newString

	// TODO: Check game state to see if winner or cat's game, else switch player's turn

	if g.users.internalOrderedArray[0] == g.whoseMoveId {
		g.whoseMoveId = g.users.internalOrderedArray[1]
	} else {
		g.whoseMoveId = g.users.internalOrderedArray[0]
	}

	return nil
}

func (g *Game) ToProto() *pb.GameState {
	return &pb.GameState{
		WhoseMoveId: g.whoseMoveId,
		GameState: &pb.GameState_TicTacToeState{
			TicTacToeState: &pb.TicTacToeState{
				FlattenedArray: g.flattenedArray,
			},
		},
		Status: g.status,
	}
}

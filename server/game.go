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

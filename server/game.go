package main

import (
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"
)

type Game struct {
	userLimit int
	users     *Set
}

func newGame(numPlayers uint32) *Game {
	return &Game{
		users:     newSet(),
		userLimit: int(numPlayers),
	}
}

func (g *Game) AssignNewUser(username string) (string, error) {
	if g.users.Size() >= g.userLimit {
		return "", status.Error(codes.FailedPrecondition, "Game full")
	}
	g.users.Add(username)
	return username, nil
}

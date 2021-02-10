package main

import (
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"
)

type Dao struct {
	games map[string]*Game
}

func newDao() *Dao {
	return &Dao{
		games: make(map[string]*Game),
	}
}

func (d *Dao) createGame(gameId string, numPlayers uint32) error {
	d.games[gameId] = newGame(numPlayers)
	return nil
}

func (d *Dao) assignUserToGame(username string, gameId string) (string, error) {
	game, ok := d.games[gameId]
	if !ok {
		return "", status.Error(codes.NotFound, "Game not found")
	}
	return game.AssignNewUser(username)
}

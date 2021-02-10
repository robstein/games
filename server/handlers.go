package main

import (
	"context"

	pb "github.com/robstein/games/server/proto"
	uuid "github.com/satori/go.uuid"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"
)

type service struct {
	pb.UnimplementedApiServer

	db *Dao
}

func newServer() *service {
	return &service{
		db: newDao(),
	}
}

func (s *service) CreateGame(ctx context.Context, in *pb.CreateGameRequest) (*pb.CreateGameResponse, error) {
	id := uuid.NewV4().String()[0:4]

	err := s.db.createGame(id, in.GetNumberOfPlayers())
	if err != nil {
		return nil, err
	}

	return &pb.CreateGameResponse{
		GameId: id,
	}, nil
}

func (s *service) JoinGame(ctx context.Context, in *pb.JoinGameRequest) (*pb.JoinGameResponse, error) {
	id, err := s.db.assignUserToGame(in.GetUsername(), in.GetGameId())
	if err != nil {
		return nil, err
	}
	return &pb.JoinGameResponse{
		PlayerId: id,
	}, nil
}

func (s *service) DescribeGame(ctx context.Context, in *pb.DescribeGameRequest) (*pb.DescribeGameResponse, error) {
	return nil, status.Error(codes.Unimplemented, "Unimplemented")
}

func (s *service) Move(ctx context.Context, in *pb.MoveRequest) (*pb.MoveResponse, error) {
	return nil, status.Error(codes.Unimplemented, "Unimplemented")
}

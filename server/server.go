package main

import (
	"context"

	pb "github.com/robstein/games/server/_proto/service"
	"google.golang.org/grpc"
)

func main() {
	grpcServer := grpc.NewServer()
	_ = grpcServer
}

type service struct{}

func (s *service) CreateGame(ctx context.Context, in *pb.CreateGameRequest, opts ...grpc.CallOption) (*pb.CreateGameResponse, error) {
	return nil, nil
}

func (s *service) JoinGame(ctx context.Context, in *pb.JoinGameRequest, opts ...grpc.CallOption) (*pb.JoinGameResponse, error) {
	return nil, nil
}

func (s *service) DescribeGame(ctx context.Context, in *pb.DescribeGameRequest, opts ...grpc.CallOption) (*pb.DescribeGameResponse, error) {
	return nil, nil
}

func (s *service) Move(ctx context.Context, in *pb.MoveRequest, opts ...grpc.CallOption) (*pb.MoveResponse, error) {
	return nil, nil
}

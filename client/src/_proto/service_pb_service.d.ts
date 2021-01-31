// package: 
// file: service.proto

import * as service_pb from "./service_pb";
import {grpc} from "@improbable-eng/grpc-web";

type ApiCreateGame = {
  readonly methodName: string;
  readonly service: typeof Api;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof service_pb.CreateGameRequest;
  readonly responseType: typeof service_pb.CreateGameResponse;
};

type ApiJoinGame = {
  readonly methodName: string;
  readonly service: typeof Api;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof service_pb.JoinGameRequest;
  readonly responseType: typeof service_pb.JoinGameResponse;
};

type ApiDescribeGame = {
  readonly methodName: string;
  readonly service: typeof Api;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof service_pb.DescribeGameRequest;
  readonly responseType: typeof service_pb.DescribeGameResponse;
};

type ApiMove = {
  readonly methodName: string;
  readonly service: typeof Api;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof service_pb.MoveRequest;
  readonly responseType: typeof service_pb.MoveResponse;
};

export class Api {
  static readonly serviceName: string;
  static readonly CreateGame: ApiCreateGame;
  static readonly JoinGame: ApiJoinGame;
  static readonly DescribeGame: ApiDescribeGame;
  static readonly Move: ApiMove;
}

export type ServiceError = { message: string, code: number; metadata: grpc.Metadata }
export type Status = { details: string, code: number; metadata: grpc.Metadata }

interface UnaryResponse {
  cancel(): void;
}
interface ResponseStream<T> {
  cancel(): void;
  on(type: 'data', handler: (message: T) => void): ResponseStream<T>;
  on(type: 'end', handler: (status?: Status) => void): ResponseStream<T>;
  on(type: 'status', handler: (status: Status) => void): ResponseStream<T>;
}
interface RequestStream<T> {
  write(message: T): RequestStream<T>;
  end(): void;
  cancel(): void;
  on(type: 'end', handler: (status?: Status) => void): RequestStream<T>;
  on(type: 'status', handler: (status: Status) => void): RequestStream<T>;
}
interface BidirectionalStream<ReqT, ResT> {
  write(message: ReqT): BidirectionalStream<ReqT, ResT>;
  end(): void;
  cancel(): void;
  on(type: 'data', handler: (message: ResT) => void): BidirectionalStream<ReqT, ResT>;
  on(type: 'end', handler: (status?: Status) => void): BidirectionalStream<ReqT, ResT>;
  on(type: 'status', handler: (status: Status) => void): BidirectionalStream<ReqT, ResT>;
}

export class ApiClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: grpc.RpcOptions);
  createGame(
    requestMessage: service_pb.CreateGameRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: service_pb.CreateGameResponse|null) => void
  ): UnaryResponse;
  createGame(
    requestMessage: service_pb.CreateGameRequest,
    callback: (error: ServiceError|null, responseMessage: service_pb.CreateGameResponse|null) => void
  ): UnaryResponse;
  joinGame(
    requestMessage: service_pb.JoinGameRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: service_pb.JoinGameResponse|null) => void
  ): UnaryResponse;
  joinGame(
    requestMessage: service_pb.JoinGameRequest,
    callback: (error: ServiceError|null, responseMessage: service_pb.JoinGameResponse|null) => void
  ): UnaryResponse;
  describeGame(
    requestMessage: service_pb.DescribeGameRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: service_pb.DescribeGameResponse|null) => void
  ): UnaryResponse;
  describeGame(
    requestMessage: service_pb.DescribeGameRequest,
    callback: (error: ServiceError|null, responseMessage: service_pb.DescribeGameResponse|null) => void
  ): UnaryResponse;
  move(
    requestMessage: service_pb.MoveRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: service_pb.MoveResponse|null) => void
  ): UnaryResponse;
  move(
    requestMessage: service_pb.MoveRequest,
    callback: (error: ServiceError|null, responseMessage: service_pb.MoveResponse|null) => void
  ): UnaryResponse;
}


import { useState, useEffect, useReducer, useCallback } from "react";
import { Api } from "./_proto/service_pb_service";
import {
  CreateGameRequest,
  CreateGameResponse,
  JoinGameRequest,
  JoinGameResponse,
} from "./_proto/service_pb";
import { grpc } from "@improbable-eng/grpc-web";
import { ProtobufMessage } from "@improbable-eng/grpc-web/dist/typings/message";

const USE_TLS = false;
const Host = USE_TLS ? "https://localhost:9091" : "http://localhost:9090";

type State = { isLoading?: boolean; data?: any; error?: string };

type Action =
  | { type: "request" }
  | { type: "success"; result: any }
  | { type: "failure"; error: string };

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case "request":
      return { isLoading: true };
    case "success":
      return { isLoading: false, data: action.result };
    case "failure":
      return { isLoading: false, error: action.error };
  }
}

export function useApi(
  methodDescriptor: any,
  request: ProtobufMessage,
  onSuccess: (message: ProtobufMessage) => any
): { state: State; execute: () => void } {
  const [state, dispatch] = useReducer(reducer, { isLoading: false });

  const [gate, setGate] = useState<string | undefined>();
  const execute = useCallback(() => {
    setGate(new Date().toString());
  }, []);

  useEffect(() => {
    let isCancelled = false;
    const fn = () => {
      dispatch({ type: "request" });
      grpc.unary(methodDescriptor, {
        request: request,
        host: Host,
        onEnd: (res) => {
          if (!isCancelled) {
            const { status, statusMessage, headers, message, trailers } = res;
            if (status === grpc.Code.OK && message) {
              console.log(message.toObject());
              dispatch({ type: "success", result: onSuccess(message) });
            } else {
              dispatch({ type: "failure", error: statusMessage.toString() });
            }
          }
        },
      });
    };

    if (gate) {
      fn();
    }

    return () => {
      isCancelled = true;
    };
  }, [gate]);

  return { state: state, execute: execute };
}

export function useCreateGameApi(
  numPlayers: number
): { state: State; execute: () => void } {
  const req = new CreateGameRequest();
  req.setNumberOfPlayers(numPlayers);
  return useApi(Api.CreateGame, req, (message: ProtobufMessage) => {
    const typed = message as CreateGameResponse;
    return typed.getGameId();
  });
}

export function useJoinGameApi(
  username: string,
  gameId: string
): { state: State; execute: () => void } {
  const req = new JoinGameRequest();
  req.setUsername(username);
  req.setGameId(gameId);
  return useApi(Api.JoinGame, req, (message: ProtobufMessage) => {
    const typed = message as JoinGameResponse;
    return typed.getPlayerId();
  });
}

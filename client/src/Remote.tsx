import { useState, useEffect, useReducer, useCallback } from "react";
import { Api } from "./_proto/service_pb_service";
import {
  CreateGameRequest,
  CreateGameResponse,
  DescribeGameRequest,
  DescribeGameResponse,
  JoinGameRequest,
  JoinGameResponse,
  Move,
  MoveRequest,
  MoveResponse,
  TicTacToeMove,
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
      return { ...state, isLoading: true };
    case "success":
      return { ...state, isLoading: false, data: action.result };
    case "failure":
      return { ...state, isLoading: false, error: action.error };
  }
}

export function useApi(
  methodDescriptor: any,
  request: ProtobufMessage,
  onSuccess: (message: ProtobufMessage) => any,
  onRequest?: (req: ProtobufMessage, trigger: any) => ProtobufMessage
): { state: State; setTrigger: React.Dispatch<any> } {
  const [state, dispatch] = useReducer(reducer, { isLoading: false });

  const [trigger, setTrigger] = useState<any | undefined>();

  useEffect(() => {
    let isCancelled = false;
    const fn = (trigger: any | undefined) => {
      dispatch({ type: "request" });
      const req = onRequest ? onRequest(request, trigger) : request;
      console.log("Method: ", methodDescriptor);
      console.log("Request: ", req.toObject());
      grpc.unary(methodDescriptor, {
        request: req,
        host: Host,
        onEnd: (res) => {
          if (!isCancelled) {
            const { status, statusMessage, headers, message, trailers } = res;
            if (status === grpc.Code.OK && message) {
              console.log("Response: ", message.toObject());
              dispatch({ type: "success", result: onSuccess(message) });
            } else {
              dispatch({ type: "failure", error: statusMessage.toString() });
            }
          }
        },
      });
    };

    if (trigger) {
      fn(trigger);
    }

    return () => {
      isCancelled = true;
    };
  }, [trigger]);

  return { state: state, setTrigger: setTrigger };
}

export function useCreateGameApi(
  numPlayers: number
): { state: State; execute: () => void } {
  const req = new CreateGameRequest();
  req.setNumberOfPlayers(numPlayers);
  const { state, setTrigger } = useApi(
    Api.CreateGame,
    req,
    (message: ProtobufMessage) => {
      const typed = message as CreateGameResponse;
      return typed.getGameId();
    }
  );
  const execute = useCallback(() => {
    setTrigger(new Date().toString());
  }, []);
  return { state: state, execute: execute };
}

export function useJoinGameApi(
  username: string,
  gameId: string
): { state: State; execute: () => void } {
  const req = new JoinGameRequest();
  req.setUsername(username);
  req.setGameId(gameId);
  const { state, setTrigger } = useApi(
    Api.JoinGame,
    req,
    (message: ProtobufMessage) => {
      const typed = message as JoinGameResponse;
      return typed.getPlayerId();
    }
  );
  const execute = useCallback(() => {
    setTrigger(new Date().toString());
  }, []);
  return { state: state, execute: execute };
}

export function useDescribeGameApi(
  username: string,
  gameId: string
): { state: State; execute: () => void } {
  const req = new DescribeGameRequest();
  req.setUsername(username);
  req.setGameId(gameId);
  const { state, setTrigger } = useApi(
    Api.DescribeGame,
    req,
    (message: ProtobufMessage) => {
      const typed = message as DescribeGameResponse;
      return typed.getState();
    }
  );
  const execute = useCallback(() => {
    setTrigger(new Date().toString());
  }, []);
  return { state: state, execute: execute };
}

export function useMoveApi(
  username: string,
  gameId: string
): { state: State; execute: React.Dispatch<any> } {
  const move = new Move();
  move.setTicTacToeMove(new TicTacToeMove());

  const req = new MoveRequest();
  req.setUsername(username);
  req.setGameId(gameId);
  req.setMove(move);
  const { state, setTrigger } = useApi(
    Api.Move,
    req,
    (message: ProtobufMessage) => {
      const typed = message as MoveResponse;
      if (typed.getNextState) {
        return typed.getNextState();
      }
    },
    (req: ProtobufMessage, trigger: any) => {
      const typed = req as MoveRequest;
      typed.getMove()?.getTicTacToeMove()?.setX(trigger.x);
      typed.getMove()?.getTicTacToeMove()?.setY(trigger.y);
      return typed;
    }
  );
  return { state: state, execute: setTrigger };
}

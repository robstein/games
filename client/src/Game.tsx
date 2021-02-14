import React, { useEffect } from "react";
import { useDescribeGameApi, useMoveApi } from "./Remote";
import { GameState, GameStatus, PropertyDetails } from "./_proto/service_pb";

export default function Game(props: { gameId: string; playerId: string }) {
  const {
    state: {
      data: gameState,
      isLoading: isLoadingGameState,
      error: gameStateError,
    },
    execute: fetchGameState,
  } = useDescribeGameApi(props.playerId, props.gameId);

  useEffect(() => {
    const interval = setInterval(() => fetchGameState(), 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  const {
    state: {
      data: nextGamestate,
      isLoading: isLoadingNextGameState,
      error: moveError,
    },
    execute: executeMove,
  } = useMoveApi(props.playerId, props.gameId);

  const game = gameState as GameState;
  let gameView;
  if (game) {
    const waitingForPlayers =
      game.getStatus() === GameStatus.WAITING_FOR_PLAYERS;
    const yourMove = game.getWhoseMoveId() === props.playerId;
    const flattenedArray = game.getTicTacToeState()?.getFlattenedArray();
    gameView = (
      <>
        {waitingForPlayers && <div>Waiting for players to join</div>}
        <div>{yourMove ? "Your move!" : game.getWhoseMoveId() + "'s move"}</div>
        {flattenedArray && (
          <Board
            gameId={props.gameId}
            playerId={props.playerId}
            flattenedArray={flattenedArray}
            onMove={(coordinates) => {
              executeMove(coordinates);
              fetchGameState();
            }}
          />
        )}
      </>
    );
  }

  return (
    <>
      {gameView}
      <div style={{ position: "fixed", bottom: "10px", right: "10px" }}>
        {gameStateError && (
          <div style={{ color: "red" }}>Error: {gameStateError}</div>
        )}
        {isLoadingGameState && <div>Syncing...</div>}
      </div>
    </>
  );
}

function stateToColor(e: string): string {
  switch (e) {
    case "x": {
      return "grey";
    }
    case "o": {
      return "grey";
    }
  }
  return "white";
}

function Board(props: {
  gameId: string;
  playerId: string;
  flattenedArray: string;
  onMove: (coordinates: { x: number; y: number }) => void;
}) {
  return (
    <div
      style={{
        margin: "auto",
        width: "166px",
        display: "grid",
        gridTemplateColumns: "50px 50px 50px",
        gridTemplateRows: "50px 50px 50px",
        columnGap: "8px",
        rowGap: "8px",
        padding: "16px",
        cursor: "pointer",
      }}
    >
      {Array.from(props.flattenedArray).map((e, i) => {
        return (
          <div
            style={{
              backgroundColor: stateToColor(e),
              height: "50px",
              lineHeight: "50px",
              border: "solid 1px black",
            }}
            onClick={() => {
              const coordinates = { x: i % 3, y: Math.floor(i / 3) };
              props.onMove(coordinates);
            }}
          >
            {e}
          </div>
        );
      })}
    </div>
  );
}

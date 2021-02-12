import React, { useEffect } from "react";
import { useDescribeGameApi } from "./Remote";
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
        {flattenedArray && <Board flattenedArray={flattenedArray} />}
        {flattenedArray}
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

function Board(props: { flattenedArray: string }) {
  console.log(Array.from(props.flattenedArray));
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "50px 50px 50px",
        gridTemplateRows: "50px 50px 50px",
        columnGap: "8px",
        rowGap: "8px",
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
              // executeMove(i)
            }}
          >
            {e}
          </div>
        );
      })}
    </div>
  );
}

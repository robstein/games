import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { useCreateGameApi, useJoinGameApi } from "./Remote";

function App() {
  return (
    <div className="App">
      <GameGettingStarted />
    </div>
  );
}
function GameGettingStarted(props: {}) {
  const [username, setUsername] = useState<string>("");
  const [gameCode, setGameCode] = useState<string>("");

  const {
    state: { data: gameId, error: createGameError },
    execute: doCreate,
  } = useCreateGameApi(2);

  const {
    state: { data: playerId, error: joinGameError },
    execute: joinGame,
  } = useJoinGameApi(username, gameId || gameCode);

  if (createGameError) {
    return <>Error: {createGameError}</>;
  }

  if (joinGameError) {
    return <>Error: {joinGameError}</>;
  }

  if (gameId && playerId) {
    return (
      <>
        Welcome to game {gameId} , player {playerId}
      </>
    );
  } else if (gameId) {
    return (
      <>
        Game created! Invite your friends to: {gameId}
        <div>
          <div>
            <input
              type="text"
              value={username}
              placeholder="username"
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                if (event) {
                  setUsername(event.target.value);
                }
              }}
            />
          </div>
          <input
            type="button"
            value="Choose user name"
            onClick={(event: React.MouseEvent<HTMLElement>) => {
              joinGame();
            }}
          />
        </div>
      </>
    );
  } else {
    return (
      <>
        <div>
          <div>Create a new game</div>
          <input
            type="button"
            value="Create game"
            onClick={(event: React.MouseEvent<HTMLElement>) => {
              doCreate();
            }}
          />
        </div>
        <hr />
        <div>
          <div>Join an existing game:</div>
          <div>
            <input
              type="text"
              value={gameCode}
              placeholder="game code"
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                if (event) {
                  setGameCode(event.target.value);
                }
              }}
            />
          </div>
          <div>
            <input
              type="text"
              value={username}
              placeholder="username"
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                if (event) {
                  setUsername(event.target.value);
                }
              }}
            />
          </div>
          <div>
            <input
              type="button"
              value="Join"
              onClick={(event: React.MouseEvent<HTMLElement>) => {
                joinGame();
              }}
            />
          </div>
        </div>
      </>
    );
  }
}

export default App;

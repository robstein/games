import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Api} from './_proto/service_pb_service'
import {CreateGameRequest} from './_proto/service_pb'
import {grpc} from "@improbable-eng/grpc-web";

const USE_TLS = false;
const Host = USE_TLS ? "https://localhost:9091" : "http://localhost:9090"

function App() {
  return (
    <div className="App">
      <input type="button" value="New Tic Tac Toe Game" onClick={()=>{
        const req = new CreateGameRequest()
        req.setNumberOfPlayers(2)
        grpc.unary(Api.CreateGame, {
          request: req,
          host: Host,
          // metadata: {
          //   "Access-Control-Allow-Origin": "*",
          //   "Access-Control-Allow-Methods": "GET, PUT, POST, DELETE, HEAD, OPTIONS"
          // },
          onEnd: (res) => {
            const { status, statusMessage, headers, message, trailers } = res;
            console.log("CreateGame.onEnd.status", status, statusMessage);
            console.log("CreateGame.onEnd.headers", headers);
            if (status === grpc.Code.OK && message) {
              console.log("CreateGame.onEnd.message", message.toObject());
            }      
            console.log("CreateGame.onEnd.trailers", trailers);
          }
        })
      }} />
    </div>
  );
}

export default App;

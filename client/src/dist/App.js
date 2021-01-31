"use strict";
exports.__esModule = true;
var react_1 = require("react");
require("./App.css");
var service_pb_service_1 = require("./_proto/service_pb_service");
var service_pb_1 = require("./_proto/service_pb");
var grpc_web_1 = require("@improbable-eng/grpc-web");
var Host = "https://localhost:3000";
function App() {
    return (react_1["default"].createElement("div", { className: "App" },
        react_1["default"].createElement("input", { type: "button", value: "New Tic Tac Toe Game", onClick: function () {
                var req = new service_pb_1.CreateGameRequest();
                req.setNumberOfPlayers(2);
                grpc_web_1.grpc.unary(service_pb_service_1.Api.CreateGame, {
                    request: req,
                    host: Host,
                    onEnd: function (res) {
                        var status = res.status, statusMessage = res.statusMessage, headers = res.headers, message = res.message, trailers = res.trailers;
                        console.log("CreateGame.onEnd.status", status, statusMessage);
                        console.log("CreateGame.onEnd.headers", headers);
                        if (status === grpc_web_1.grpc.Code.OK && message) {
                            console.log("CreateGame.onEnd.message", message.toObject());
                        }
                        console.log("CreateGame.onEnd.trailers", trailers);
                    }
                });
            } })));
}
exports["default"] = App;

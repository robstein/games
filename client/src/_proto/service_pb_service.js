// package: 
// file: service.proto

var service_pb = require("./service_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var Api = (function () {
  function Api() {}
  Api.serviceName = "Api";
  return Api;
}());

Api.CreateGame = {
  methodName: "CreateGame",
  service: Api,
  requestStream: false,
  responseStream: false,
  requestType: service_pb.CreateGameRequest,
  responseType: service_pb.CreateGameResponse
};

Api.JoinGame = {
  methodName: "JoinGame",
  service: Api,
  requestStream: false,
  responseStream: false,
  requestType: service_pb.JoinGameRequest,
  responseType: service_pb.JoinGameResponse
};

Api.DescribeGame = {
  methodName: "DescribeGame",
  service: Api,
  requestStream: false,
  responseStream: false,
  requestType: service_pb.DescribeGameRequest,
  responseType: service_pb.DescribeGameResponse
};

Api.Move = {
  methodName: "Move",
  service: Api,
  requestStream: false,
  responseStream: false,
  requestType: service_pb.MoveRequest,
  responseType: service_pb.MoveResponse
};

exports.Api = Api;

function ApiClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

ApiClient.prototype.createGame = function createGame(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Api.CreateGame, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

ApiClient.prototype.joinGame = function joinGame(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Api.JoinGame, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

ApiClient.prototype.describeGame = function describeGame(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Api.DescribeGame, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

ApiClient.prototype.move = function move(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Api.Move, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

exports.ApiClient = ApiClient;


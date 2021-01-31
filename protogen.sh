#!/bin/bash

mkdir -p ./client/src/_proto
mkdir -p ./server/proto

protoc \
  --plugin=protoc-gen-ts=./client/node_modules/.bin/protoc-gen-ts \
  --plugin=protoc-gen-go=${GOBIN}/protoc-gen-go \
  -I . \
  --js_out=import_style=commonjs,binary:./client/src/_proto \
  --go_out=./server/proto \
  --ts_out=service=grpc-web:./client/src/_proto \
  ./service.proto
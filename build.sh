#!/bin/sh

protoc -I=. --go_out=. service.proto
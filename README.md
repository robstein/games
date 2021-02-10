# games

## How to run locallly

1. Install gRPC Go prerequisites https://grpc.io/docs/languages/go/quickstart/#prerequisites
1. Install gRPC Typescript prerequisites: `pushd client && yarn && popd`
1. Generate protos `./protogen.sh`
1. Generate  `pushd cert && ./gen.sh && popd`
1. Run the server `cd server && go run server.go`
1. In another terminal, run the webapp `cd client && yarn start`
package main

import (
	"flag"
	"fmt"
	"log"
	"net/http"
	"os"

	"github.com/improbable-eng/grpc-web/go/grpcweb"
	pb "github.com/robstein/games/server/proto"
	"google.golang.org/grpc"
	"google.golang.org/grpc/grpclog"
)

// Basic grpcweb server. See:
// https://grpc.io/docs/languages/go/basics/
// https://github.com/improbable-eng/grpc-web/blob/master/client/grpc-web-react-example/go/exampleserver/exampleserver.go

var (
	enableTls       = flag.Bool("enable_tls", false, "Use TLS - required for HTTP2.")
	tlsCertFilePath = flag.String("tls_cert_file", "../cert/server-cert.pem", "Path to the CRT/PEM file.")
	tlsKeyFilePath  = flag.String("tls_key_file", "../cert/server-key.pem", "Path to the private key file.")
)

func main() {
	flag.Parse()

	port := 9090
	if *enableTls {
		port = 9091
	}

	var opts []grpc.ServerOption
	grpcServer := grpc.NewServer(opts...)
	pb.RegisterApiServer(grpcServer, newServer())
	grpclog.SetLogger(log.New(os.Stdout, "gameserver: ", log.LstdFlags))

	wrappedServer := grpcweb.WrapServer(grpcServer)
	handler := func(resp http.ResponseWriter, req *http.Request) {
		enableCors(&resp)
		wrappedServer.ServeHTTP(resp, req)
	}
	// handler.AllowedOrigins([]string{"*"})
	httpServer := http.Server{
		Addr:    fmt.Sprintf(":%d", port),
		Handler: http.HandlerFunc(handler),
	}

	grpclog.Printf("Starting server. http port: %d, with TLS: %v", port, *enableTls)

	if *enableTls {
		if err := httpServer.ListenAndServeTLS(*tlsCertFilePath, *tlsKeyFilePath); err != nil {
			grpclog.Fatalf("failed starting http2 server: %v", err)
		}
	} else {
		if err := httpServer.ListenAndServe(); err != nil {
			grpclog.Fatalf("failed starting http server: %v", err)
		}
	}
}

func enableCors(w *http.ResponseWriter) {
	(*w).Header().Set("Access-Control-Allow-Origin", "http://localhost:3000")
	(*w).Header().Set("Access-Control-Allow-Headers", "x-grpc-web,content-type")
}

package main

import (
	"context"
	"github.com/gorilla/mux"
	"log"
	"net/http"
	"os"
	"time"
)

var shutdown = make(chan os.Signal)

func main() {
	router := mux.NewRouter()

	router.PathPrefix("/").Handler(http.FileServer(http.Dir("./static")))

	server := &http.Server{
		Addr: "0.0.0.0:8080",
		WriteTimeout: time.Second*15,
		ReadTimeout: time.Second*15,
		IdleTimeout: time.Second*60,
		Handler: router,
	}

	go func() {
		log.Println("Started server...")
		if err := server.ListenAndServe(); err != nil {
			log.Fatalf("Server stopped: %v", err)
		}
	}()

	<- shutdown

	ctx, cancel := context.WithTimeout(context.Background(), time.Second*5)
	defer func() {
		cancel()
	}()

	if err := server.Shutdown(ctx); err != nil {
		log.Fatalf("Failed to stop server gracefully: %v", err)
	}
}

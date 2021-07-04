package server

import (
	"fmt"
	// "io/ioutil"
	
	"log"
	"net/http"
	"os"

	"github.com/gorilla/handlers"
	// "github.com/justinas/alice"

	"github.com/playfulweb/controller"
	"github.com/playfulweb/db"
	"github.com/gorilla/mux"
	"github.com/jmoiron/sqlx"
)

type Server struct {
	db           *sqlx.DB
	router       *mux.Router
}

func NewServer() *Server {
	return &Server{}
}

func (s *Server) Init(datasource string) error {
	cs := db.NewDB(datasource)
	dbcon, err := cs.Open()
	if err != nil {
		return fmt.Errorf("failed db init. %s", err)
	}
	s.db = dbcon

	s.router = s.Route()
	return nil
}

func (s *Server) Run(port int) {
	log.Printf("Listening on port %d", port)
	err := http.ListenAndServe(
		fmt.Sprintf(":%d", port),
		handlers.CombinedLoggingHandler(os.Stdout, s.router),
	)
	if err != nil {
		panic(err)
	}
}

func (s *Server) Route() *mux.Router {

	r := mux.NewRouter()
	PeopleControlloer := controller.NewPeople(s.db)
	r.Methods(http.MethodPost).Path("/people/fac").Handler(AppHandler{PeopleControlloer.CreateFaculties})
	
	return r
}

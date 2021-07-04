package service

import (
	"github.com/playfulweb/dbutil"
	"github.com/jmoiron/sqlx"
	"github.com/pkg/errors"

	"github.com/playfulweb/model"
	"github.com/playfulweb/repository"
	//"fmt"
)

type People struct {
	db *sqlx.DB
}

func NewPeople(db *sqlx.DB) *People {
	return &People{db}
}

func (a *People) CreateFaculties(mf *model.Faculties) (int64, error) {
	var createdId int64
	if err := dbutil.TXHandler(a.db, func(tx *sqlx.Tx) error {
		mp := model.People{
			Name:mf.Name,
			Role:mf.Role,
			ImageURL:mf.ImageURL,
		}

		people, err := repository.AddPeople(a.db, &mp)	
		if err != nil {
			return err
		}
		if err := tx.Commit(); err != nil {
			return err
		}
		
		id, err := people.LastInsertId()
		
		_, err = repository.AddFaculties(a.db, mf, int(id))	
		if err != nil {
			return err
		}
		
		if err := tx.Commit(); err != nil {
			return err
		}
		
		createdId = id
		return err
		
	}); err != nil {
		return 0, errors.Wrap(err, "failed recipe insert transaction")
	}
	return createdId, nil
}

func (a *People) CreateStudents(mf *model.Students) (int64, error) {
	var createdId int64
	if err := dbutil.TXHandler(a.db, func(tx *sqlx.Tx) error {
		mp := model.People{
			Name:mf.Name,
			Role:mf.Role,
			ImageURL:mf.ImageURL,
		}

		people, err := repository.AddPeople(a.db, &mp)	
		if err != nil {
			return err
		}
		if err := tx.Commit(); err != nil {
			return err
		}
		
		id, err := people.LastInsertId()
		
		_, err = repository.AddStudents(a.db, mf, int(id))	
		if err != nil {
			return err
		}
		
		if err := tx.Commit(); err != nil {
			return err
		}
		
		createdId = id
		return err
		
	}); err != nil {
		return 0, errors.Wrap(err, "failed recipe insert transaction")
	}
	return createdId, nil
}

func (a *People) UpdateFaculties(mf *model.Faculties) (int64, error) {
	var createdId int64
	if err := dbutil.TXHandler(a.db, func(tx *sqlx.Tx) error {
		
		_, err := repository.UpdateFaculties(a.db, mf)	
		if err != nil {
			return err
		}
		
		if err := tx.Commit(); err != nil {
			return err
		}
		
		createdId = 0
		return err
		
	}); err != nil {
		return 0, errors.Wrap(err, "failed recipe insert transaction")
	}
	return createdId, nil
}

func (a *People) UpdateStudents(mf *model.Students) (int64, error) {
	var createdId int64
	if err := dbutil.TXHandler(a.db, func(tx *sqlx.Tx) error {

		_, err := repository.UpdateStudents(a.db, mf)	
		if err != nil {
			return err
		}
		
		if err := tx.Commit(); err != nil {
			return err
		}
		
		createdId = 0
		return err
		
	}); err != nil {
		return 0, errors.Wrap(err, "failed recipe insert transaction")
	}
	return createdId, nil
}

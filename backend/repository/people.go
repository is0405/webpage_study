package repository

import (
	"database/sql"

	"github.com/playfulweb/model"
	"github.com/jmoiron/sqlx"
)

func AddPeople(db *sqlx.DB, mp *model.People) (sql.Result, error) {
	return db.Exec(`
INSERT INTO people(name, role, image_url)
VALUES (?, ?, ?)
`, mp.Name, mp.Role, mp.ImageURL)
}

func AddFaculties(db *sqlx.DB, mf *model.Faculties, pid int) (sql.Result, error) {
	return db.Exec(`
INSERT INTO  (people_id, title, email, web_url)
VALUES (?, ?, ?, ?)
`, pid, mf.Title, mf.Email, mf.WebURL)
}

func AddStudents(db *sqlx.DB, ms *model.Students, pid int) (sql.Result, error) {
	return db.Exec(`
INSERT INTO  (people_id, thema_id)
VALUES (?, ?)
`, pid, ms.ThemaID)
}

func GetFaculties(db *sqlx.DB, fid int) (*model.Faculties, error) {
	var mf model.Faculties
	if err := db.Get(&mf, `
SELECT faculties.id, name, role, image_url, people_id, title, email, web_url, created_at, updated_at
FROM faculties 
INNER JOIN people ON faculties.people_id = people.id
WHERE faculties.id = ?;
	`, fid); err != nil {
		return nil, err
	}

	return &mf, nil
}

func GetStudents(db *sqlx.DB, sid int) (*model.Students, error) {
	var ms model.Students
	if err := db.Get(&ms, `
SELECT students.id, name, role, image_url, people_id, thema_id, created_at, updated_at
FROM students
INNER JOIN people ON students.people_id = people.id
WHERE students.id = ?;
	`, sid); err != nil {
		return nil, err
	}

	return &ms, nil
}

func GetFacultiesList(db *sqlx.DB) (*[]model.Faculties, error) {
	var mf []model.Faculties
	if err := db.Select(&mf, `
SELECT faculties.id, name, role, image_url, people_id, title, email, web_url, created_at, updated_at
FROM faculties 
INNER JOIN people ON faculties.people_id = people.id;
	`); err != nil {
		return nil, err
	}

	return &mf, nil
}

func GetStudentsList(db *sqlx.DB) (*[]model.Students, error) {
	var ms []model.Students
	if err := db.Select(&ms, `
SELECT students.id, name, role, image_url, people_id, thema_id, created_at, updated_at
FROM students
INNER JOIN people ON students.people_id = people.id;
	`); err != nil {
		return nil, err
	}

	return &ms, nil
}

func UpdateFaculties(db *sqlx.DB, mf *model.Faculties) (sql.Result, error) {
	return db.Exec(`
UPDATE faculties SET name = ?, role = ?, image_url = ?, title = ?, email = ?, web_url = ?
FROM faculties 
INNER JOIN people ON faculties.people_id = people.id
WHERE faculties.id = ?;
`, mf.Name, mf.Role, mf.ImageURL, mf.Title, mf.Email, mf.WebURL, mf.ID)
}

func UpdateStudents(db *sqlx.DB, ms *model.Students) (sql.Result, error) {
	return db.Exec(`
UPDATE students SET name = ?, role = ?, image_url = ?, thema_id = ?
FROM students 
INNER JOIN people ON student.people_id = people.id
WHERE students.id = ?;
`, ms.Name, ms.Role, ms.ImageURL, ms.ThemaID, ms.ID)
}

package controller

import (
	"encoding/json"
	"net/http"
	"strings"
	"errors"
	"regexp"
	// "fmt"
	"strconv"

	"github.com/playfulweb/model"
	"github.com/playfulweb/repository"
	"github.com/playfulweb/service"
	"github.com/jmoiron/sqlx"
)

type People struct {
	db *sqlx.DB
}

func NewPeople(db *sqlx.DB) *People {
	return &People{db: db}
}


func (a *People) CreateFaculties(_ http.ResponseWriter, r *http.Request) (int, interface{}, error) {
	
	rawFaculties := &model.Faculties{}
	
	err := json.NewDecoder(r.Body).Decode(&rawFaculties);
	if err != nil {
		return http.StatusBadRequest, nil, err
	}

	status, err := FacultiesCheck(rawFaculties)
	if err != nil {
		return status, nil, err
	}
	
	Service := service.NewPeople(a.db)
	_, err = Service.CreateFaculties(rawFaculties)
	if err != nil {
		return http.StatusInternalServerError, nil, err
	}

	
	return http.StatusOK, nil, nil
}

func (a *People) CreateStudents(_ http.ResponseWriter, r *http.Request) (int, interface{}, error) {
	
	rawStudents := &model.Students{}
	
	err := json.NewDecoder(r.Body).Decode(&rawStudents);
	if err != nil {
		return http.StatusBadRequest, nil, err
	}

	status, err := StudentsCheck(rawStudents)
	if err != nil {
		return status, nil, err
	}
	
	Service := service.NewPeople(a.db)
	_, err = Service.CreateStudents(rawStudents)
	if err != nil {
		return http.StatusInternalServerError, nil, err
	}

	
	return http.StatusOK, nil, nil
}

func (a *People) GetAllFaculties(_ http.ResponseWriter, r *http.Request) (int, interface{}, error) {
	FacultiesList, err := repository.GetFacultiesList(a.db)
	if err != nil {
		return http.StatusInternalServerError, nil, err
	}
	return http.StatusOK, FacultiesList, nil
}

func (a *People) GetAllStudents(_ http.ResponseWriter, r *http.Request) (int, interface{}, error) {
	StudentsList, err := repository.GetStudentsList(a.db)
	if err != nil {
		return http.StatusInternalServerError, nil, err
	}
	return http.StatusOK, StudentsList, nil
}

func (a *People) UpdateFaculties(_ http.ResponseWriter, r *http.Request) (int, interface{}, error) {

	id, err := URLToID(r)
	if err != nil {
		return http.StatusBadRequest, nil, errors.New("Updated failed")
	}
	
	rawFaculties := &model.Faculties{}
	
	err = json.NewDecoder(r.Body).Decode(&rawFaculties);
	if err != nil {
		return http.StatusBadRequest, nil, err
	}

	status, err := FacultiesCheck(rawFaculties)
	if err != nil {
		return status, nil, err
	}

	_, err = repository.GetFaculties(a.db, id)
	if err != nil {
		return http.StatusInternalServerError, nil, err
	}

	rawFaculties.ID = id
	
	Service := service.NewPeople(a.db)
	_, err = Service.UpdateFaculties(rawFaculties)
	if err != nil {
		return http.StatusInternalServerError, nil, err
	}
	
	return http.StatusOK, nil, nil
}


func (a *People) UpdateStudents(_ http.ResponseWriter, r *http.Request) (int, interface{}, error) {

	id, err := URLToID(r)
	if err != nil {
		return http.StatusBadRequest, nil, errors.New("Updated failed")
	}
	
	rawStudents := &model.Students{}
	
	err = json.NewDecoder(r.Body).Decode(&rawStudents);
	if err != nil {
		return http.StatusBadRequest, nil, err
	}

	status, err := StudentsCheck(rawStudents)
	if err != nil {
		return status, nil, err
	}

	_, err = repository.GetStudents(a.db, id)
	if err != nil {
		return http.StatusInternalServerError, nil, err
	}

	rawStudents.ID = id
	
	Service := service.NewPeople(a.db)
	_, err = Service.UpdateStudents(rawStudents)
	if err != nil {
		return http.StatusInternalServerError, nil, err
	}
	
	return http.StatusOK, nil, nil
}


func FacultiesCheck(mf *model.Faculties) (int, error) {
	//Name 
	if mf.Name == "" {
		return http.StatusUnprocessableEntity, errors.New("required parameter is missing:Name")
	}
	if !NameCheck(mf.Name) {
		return http.StatusBadRequest, errors.New("using illegal characters:Name")
	}

	//Role
	if mf.Role != "faculties" {
		return http.StatusUnprocessableEntity, errors.New("required parameter is missing:Role")
	}

	//ImageURL
	if mf.ImageURL == "" {
		mf.ImageURL = "../image/defalt.png"
	}

	//Title
	if mf.Title == "" {
		return http.StatusUnprocessableEntity, errors.New("required parameter is missing:Title")
	}
	if !NameCheck(mf.Title) {
		return http.StatusBadRequest,  errors.New("using illegal characters: Title")
	}

	//Email
	if mf.Email == "" {
		return http.StatusUnprocessableEntity, errors.New("required parameter is missing:Email")
	}
	if !MailCheck(mf.Email) {
		return http.StatusBadRequest, errors.New("using illegal characters: Email")
	}

	//WebURLはなくてもよい
	if mf.WebURL == "" {
	}

	return 0, nil
}

func StudentsCheck(ms *model.Students) (int, error) {
	//Name
	if ms.Name == "" {
		return http.StatusUnprocessableEntity, errors.New("required parameter is missing:Name")
	}
	if !NameCheck(ms.Name) {
		return http.StatusBadRequest, errors.New("using illegal characters:Name")
	}

	//Role
	if ms.Role != "faculties" {
		return http.StatusUnprocessableEntity, errors.New("required parameter is missing:Role")
	}

	//ImageURL
	if ms.ImageURL == "" {
		ms.ImageURL = "../image/defalt.png"
	}

	//ThemaIDはなくてもよい
	if ms.ThemaID == 0 {
	}

	return 0,  nil
}

func NumCheck(str string) bool {
	//数字以外を探す
	symbol := regexp.MustCompile(`[^0-9]`)
	if symbol.Match([]byte(str)) {
		//数字以外が含まれている
		return false
	}
	//数字のみ
	return true
}

func MailCheck(str string) bool {
	chars := []string{"@", ".", "\\_", "\\-"}
    r := strings.Join(chars, "")
	symbol := regexp.MustCompile("[^" + r + "A-Za-z0-9]+")
	if symbol.Match([]byte(str)) {
		//上記以外がある
		return false
	} else {
		symbol := regexp.MustCompile(`\s*@\s*`)
		symbol2 := regexp.MustCompile(`\s*\.\s*`)

		group := symbol.Split(str, -1)
		if len(group) != 2 {
			return false
		}

		group = symbol2.Split(str, -1)
		for i := 0; i < len(group); i++ {
			if group[i] == "" {
				return false
			} else if strings.HasSuffix(group[i], "@") {
				return false
			}
		}
	}
	return true
}

func NameCheck(str string) bool {
	chars := []string{"?", "!", "\\*","\\_", "\\#", "<", ">", "\\\\", "(", ")", "\\$", "\"", "%", "=", "~", "|", "[", "]", ";", "\\+", ":", "{", "}", "@", "\\`", "/", "；", "＠", "＋", "：", "＊", "｀", "「", "」", "｛", "｝", "＿", "？", "。", "、", "＞", "＜"}
    r := strings.Join(chars, "")
	symbol := regexp.MustCompile("[" + r + "0-9]+")
	if symbol.Match([]byte(str)) {
		//上記が含まれている
		return false
	}
	return true
}

func URLToID(r *http.Request) (int, error) {
	url := r.URL.Path
	strID := url[strings.LastIndex(url, "/")+1:]
	id, err := strconv.Atoi( strID )
	if err != nil {
		return 0, err
	}
	
	return id, nil
}

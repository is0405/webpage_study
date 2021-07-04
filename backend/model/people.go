package model

type People struct {
	ID          int    `db:"id" json:"id"`
	Name        string `db:"name" json:"name"`
	Role        string `db:"role" json:"role"`
	ImageURL    string `db:"image_url" json:"image_url"`
	CreatedAt   string `db:"created_at" json:"created_at"`
	UpdatedAt   string `db:"updated_at" json:"updated_at"`
}

type Faculties struct {
	ID          int    `db:"id" json:"id"`
	Name        string `db:"name" json:"name"`
	Role        string `db:"role" json:"role"`
	ImageURL    string `db:"image_url" json:"image_url"`
	PeopleID    int    `db:"people_id" json:"people_id"`
	Title       string `db:"title" json:"title"`
	Email       string `db:"email" json:"email"`
	WebURL      string `db:"web_url" json:"web_url"`
	CreatedAt   string `db:"created_at" json:"created_at"`
	UpdatedAt   string `db:"updated_at" json:"updated_at"`
}

type Students struct {
	ID          int    `db:"id" json:"id"`
	Name        string `db:"name" json:"name"`
	Role        string `db:"role" json:"role"`
	ImageURL    string `db:"image_url" json:"image_url"`
	PeopleID    int    `db:"people_id" json:"people_id"`
	ThemaID     int    `db:"thema_id" json:"thema_id"`
	CreatedAt   string `db:"created_at" json:"created_at"`
	UpdatedAt   string `db:"updated_at" json:"updated_at"`
}

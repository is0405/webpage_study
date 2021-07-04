package model

type Project struct {
	ID          int    `db:"id" json:"id"`
	Name        string `db:"name" json:"name"`
	Role        string `db:"role" json:"role"`
	ImageURL    string `db:"image_url" json:"image_url"`
	CreatedAt   string `db:"created_at" json:"created_at"`
	UpdatedAt   string `db:"updated_at" json:"updated_at"`
}

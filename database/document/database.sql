CREATE TABLE `account` (
  `id` varchar(32) NOT NULL,
  `password` varchar(32) NOT NULL,
  `created_at` timestamp NOT NULL,
  `updated_at` timestamp NOT NULL
);

CREATE TABLE `people` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `name` varchar(32) NOT NULL,
  `role` varchar(32) NOT NULL,
  `image_url` varchar(255) NOT NULL,
  `created_at` timestamp NOT NULL,
  `updated_at` timestamp NOT NULL
);

CREATE TABLE `faculties` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `people_id` int NOT NULL,
  `title` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `web_url` varchar(255),
  `created_at` timestamp NOT NULL,
  `updated_at` timestamp NOT NULL
);

CREATE TABLE `students` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `people_id` int NOT NULL,
  `thema_id` int NOT NULL,
  `created_at` timestamp NOT NULL,
  `updated_at` timestamp NOT NULL
);

CREATE TABLE `projects` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `title` varchar(255) NOT NULL,
  `keyword` varchar(255) NOT NULL,
  `description` text,
  `image_url` varchar(255) NOT NULL,
  `created_at` timestamp NOT NULL,
  `updated_at` timestamp NOT NULL
);

CREATE TABLE `faqs` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `question` text,
  `answer` text,
  `created_at` timestamp NOT NULL,
  `updated_at` timestamp NOT NULL
);

ALTER TABLE `faculties` ADD FOREIGN KEY (`people_id`) REFERENCES `people` (`id`);

ALTER TABLE `students` ADD FOREIGN KEY (`people_id`) REFERENCES `people` (`id`);

ALTER TABLE `students` ADD FOREIGN KEY (`thema_id`) REFERENCES `projects` (`id`);

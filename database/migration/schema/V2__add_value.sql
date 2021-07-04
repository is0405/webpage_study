INSERT INTO `account` (id, password)
VALUES ("playful", "playfulweb");

INSERT INTO `people` (name, role, image_url)
VALUES ("松村 耕平", "faculties", "/images/matsumura.jpg");
INSERT INTO `faculties` (people_id, title, email, web_url)
VALUES (1, "准教授", "matsumur@fc.ritsumei.ac.jp", "https://research-db.ritsumei.ac.jp/rithp/k03/resid/S001223");

INSERT INTO `people` (name, role, image_url)
VALUES ("岡藤 勇希", "faculties", "/images/okafuji.jpg");
INSERT INTO `faculties` (people_id, title, email, web_url)
VALUES (2, "助教授", "yokafuji@fc.ritsumei.ac.jp", "https://yukiokafuji.mystrikingly.com");

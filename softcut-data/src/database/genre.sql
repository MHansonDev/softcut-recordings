Select database();
USE media;

DROP TABLE IF EXISTS genre;

/* Create Genre Table */
CREATE TABLE IF NOT EXISTS genre (
	id INT AUTO_INCREMENT PRIMARY KEY,
	`name` VARCHAR(200),
	`description` VARCHAR(1000),
	`color` varchar(50),
    `read_only` bit,
    added_on datetime
);

/* Insert Default Generes */
INSERT INTO genre (`name`, `description`, color, `read_only`, added_on)
Select 'Rock', 'A little less heavy', '0000FF', 1, current_date
WHERE NOT EXISTS (SELECT * FROM genre WHERE `name` = 'Rock' LIMIT 1);
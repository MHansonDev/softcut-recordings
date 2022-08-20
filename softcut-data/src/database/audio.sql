Select database();
USE media;

/* Create Audio Table */
CREATE TABLE IF NOT EXISTS audio (
	id INT AUTO_INCREMENT PRIMARY KEY,
	file_name VARCHAR(200),
	description VARCHAR(1000),
	path varchar(500),
	extension varchar(50),
	genre int,
	added_on DATETIME
);

/* Insert Test Media */
INSERT INTO audio (file_name, description, path, extension, genre, added_on)
Select 'Bluesica', 'Metallica ripoff', './assets/Audio/Metal', '.mp3', 1, current_date
WHERE NOT EXISTS (SELECT * FROM audio WHERE file_name = 'Bluesica.mp3' LIMIT 1);
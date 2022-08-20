Create Database IF NOT EXISTS media;

Select database();
USE media;

/* Create Media Type Table */
CREATE TABLE IF NOT EXISTS media_type (
   id INT AUTO_INCREMENT PRIMARY KEY,
   name VARCHAR(200),
   description VARCHAR(1000),
   added_on DATETIME
);

/* Insert Media Types */
INSERT INTO media_type (name, description, added_on)
Select 'Audio', 'MP3/WAV files rendered from Cubase', current_date()
WHERE NOT EXISTS (Select * From media_type Where name = 'Audio' LIMIT 1);

INSERT INTO media_type (name, description, added_on)
Select 'Video', 'MP4/WMV files from Filmora / GoPro / Canon', current_date()
WHERE NOT EXISTS (Select * From media_type Where name = 'Video' LIMIT 1);

INSERT INTO media_type (name, description, added_on)
Select 'Pictures', 'JPG/PNG files from Editor / GoPro / Canon', current_date()
WHERE NOT EXISTS (Select * From media_type Where name = 'Pictures' LIMIT 1);
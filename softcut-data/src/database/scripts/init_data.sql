Select database();
USE media;

/* Insert Default  Media Types */
INSERT INTO media_type (name, description, added_on)
Select 'Audio', 'MP3/WAV files rendered from Cubase', current_date()
WHERE NOT EXISTS (Select * From media_type Where name = 'Audio' LIMIT 1);

INSERT INTO media_type (name, description, added_on)
Select 'Video', 'MP4/WMV files from Filmora / GoPro / Canon', current_date()
WHERE NOT EXISTS (Select * From media_type Where name = 'Video' LIMIT 1);

INSERT INTO media_type (name, description, added_on)
Select 'Pictures', 'JPG/PNG files from Editor / GoPro / Canon', current_date()
WHERE NOT EXISTS (Select * From media_type Where name = 'Pictures' LIMIT 1);


/* Insert Default Generes */
INSERT INTO genre (`name`, `description`, color, `read_only`, added_on)
Select 'Metal', 'Heavy distortion & loud cracks', '0000FF', 1, current_date
WHERE NOT EXISTS (SELECT * FROM genre WHERE `name` = 'Metal' LIMIT 1);

INSERT INTO genre (`name`, `description`, color, `read_only`, added_on)
Select 'Rock', 'A little less heavy', '0000FF', 1, current_date
WHERE NOT EXISTS (SELECT * FROM genre WHERE `name` = 'Rock' LIMIT 1);

INSERT INTO genre (`name`, `description`, color, `read_only`, added_on)
Select 'Electronic', 'Heavy on the synths', '0000FF', 1, current_date
WHERE NOT EXISTS (SELECT * FROM genre WHERE `name` = 'Electronic' LIMIT 1);

INSERT INTO genre (`name`, `description`, color, `read_only`, added_on)
Select 'Chill', 'Not heavy at all', '0000FF', 1, current_date
WHERE NOT EXISTS (SELECT * FROM genre WHERE `name` = 'Chill' LIMIT 1);



/* Insert Audio file Data */

/************************** Metal ***************************************/
Declare @MetalGenreID := id From genre where `name` = 'Metal';
INSERT INTO audio (file_name, description, path, extension, genre, added_on)
Select 'Bluesica', 'Metallica ripoff', '/Metal', '.mp3', @MetalGenreID, current_date
WHERE NOT EXISTS (SELECT * FROM audio WHERE file_name = 'Bluesica' LIMIT 1);

INSERT INTO audio (file_name, description, path, extension, genre, added_on)
Select 'Medium Roast', 'Slow start to sudden changes', '/Metal', '.mp3', @MetalGenreID, current_date
WHERE NOT EXISTS (SELECT * FROM audio WHERE file_name = 'Medium Roast' LIMIT 1);

INSERT INTO audio (file_name, description, path, extension, genre, added_on)
Select 'Arduous', 'A Doom Ending', '/Metal', '.mp3', @MetalGenreID, current_date
WHERE NOT EXISTS (SELECT * FROM audio WHERE file_name = 'Arduous' LIMIT 1);

INSERT INTO audio (file_name, description, path, extension, genre, added_on)
Select 'Starting on a Blue Desert', 'Mistakes and all', '/Metal', '.mp3', @MetalGenreID, current_date
WHERE NOT EXISTS (SELECT * FROM audio WHERE file_name = 'Starting on a Blue Desert' LIMIT 1);

INSERT INTO audio (file_name, description, path, extension, genre, added_on)
Select 'Confused Smoke Detector', 'Recorded with a Smoke Alarm', '/Metal', '.mp3', @MetalGenreID, current_date
WHERE NOT EXISTS (SELECT * FROM audio WHERE file_name = 'Confused Smoke Detector' LIMIT 1);

INSERT INTO audio (file_name, description, path, extension, genre, added_on)
Select 'We''re Hirin''', 'No We''re not', '/Metal', '.mp3', @MetalGenreID, current_date
WHERE NOT EXISTS (SELECT * FROM audio WHERE file_name = 'We''re Hirin''' LIMIT 1);

/****************************** Rock ****************************************/
Declare @RockGenreID := id From genre where `name` = 'Metal';

/*************************** Electronic ****************************************/
Declare @EletronicGenreID := id From genre where `name` = 'Metal';
INSERT INTO audio (file_name, description, path, extension, genre, added_on)
Select 'Neutron showcase', 'Runaway Synth', '/Electronic', '.mp3', @ElectronicGenreID, current_date
WHERE NOT EXISTS (SELECT * FROM audio WHERE file_name = 'Neutron Showcase' LIMIT 1);

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
INSERT INTO genre (`name`, `description`, color, image, `read_only`, added_on)
Select 'Metal', 'Double tracked guitar supplemented by a healthy amount of distortion and some drums', '0000FF', 'Metal/metal-thin-border.png',  1, current_date
WHERE NOT EXISTS (SELECT * FROM genre WHERE `name` = 'Metal' LIMIT 1);

INSERT INTO genre (`name`, `description`, color, image, `read_only`, added_on)
Select 'Rock', 'Mild Distortion with a more Mellow Vibe', '0000FF', 'Rock/rock-thin-border.png', 1, current_date
WHERE NOT EXISTS (SELECT * FROM genre WHERE `name` = 'Rock' LIMIT 1);

INSERT INTO genre (`name`, `description`, color, image, `read_only`, added_on)
Select 'Electronic', 'Synths, Sequencers & Sidechaining', '0000FF', 'Electronic/electronic-thin-border.png', 1, current_date
WHERE NOT EXISTS (SELECT * FROM genre WHERE `name` = 'Electronic' LIMIT 1);

INSERT INTO genre (`name`, `description`, color, image, `read_only`, added_on)
Select 'Chill', 'Tunes that don''t feature heavy bass or a snare that smacks', '0000FF', 'Chill/chill-thin-border.png', 1, current_date
WHERE NOT EXISTS (SELECT * FROM genre WHERE `name` = 'Chill' LIMIT 1);



/* Insert Audio file Data */

/************************** Metal ***************************************/
Select @MetalGenreID := id From genre where `name` = 'Metal';
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
Select @RockGenreID := id From genre where `name` = 'Rock';
INSERT INTO audio (file_name, description, path, extension, genre, added_on)
Select 'Vapor', 'Heavy on the Delay', '/Rock', '.mp3', @RockGenreID, current_date
WHERE NOT EXISTS (SELECT * FROM audio WHERE file_name = 'Vapor' LIMIT 1);

INSERT INTO audio (file_name, description, path, extension, genre, added_on)
Select 'Free Range Seltzer', 'Well thought out song title', '/Rock', '.mp3', @RockGenreID, current_date
WHERE NOT EXISTS (SELECT * FROM audio WHERE file_name = 'Free Range Seltzer' LIMIT 1);

INSERT INTO audio (file_name, description, path, extension, genre, added_on)
Select 'Free Range Seltzer', 'Well thought out song title', '/Rock', '.mp3', @RockGenreID, current_date
WHERE NOT EXISTS (SELECT * FROM audio WHERE file_name = 'Free Range Seltzer' LIMIT 1);

INSERT INTO audio (file_name, description, path, extension, genre, added_on)
Select 'Sweltering Faults', 'Mistakes and all...', '/Rock', '.mp3', @RockGenreID, current_date
WHERE NOT EXISTS (SELECT * FROM audio WHERE file_name = 'Sweltering Faults' LIMIT 1);

INSERT INTO audio (file_name, description, path, extension, genre, added_on)
Select 'East Annex', 'UMaine Campus of course', '/Rock', '.mp3', @RockGenreID, current_date
WHERE NOT EXISTS (SELECT * FROM audio WHERE file_name = 'East Annex' LIMIT 1);

INSERT INTO audio (file_name, description, path, extension, genre, added_on)
Select 'Purple Pitch', 'Started as a Circuit Bending Project', '/Rock', '.mp3', @RockGenreID, current_date
WHERE NOT EXISTS (SELECT * FROM audio WHERE file_name = 'Purple Pitch' LIMIT 1);

INSERT INTO audio (file_name, description, path, extension, genre, added_on)
Select 'Princeton', 'First composition in a new place', '/Rock', '.mp3', @RockGenreID, current_date
WHERE NOT EXISTS (SELECT * FROM audio WHERE file_name = 'Princeton' LIMIT 1);

INSERT INTO audio (file_name, description, path, extension, genre, added_on)
Select 'MOOD', 'Chase Bliss', '/Rock', '.mp3', @RockGenreID, current_date
WHERE NOT EXISTS (SELECT * FROM audio WHERE file_name = 'MOOD' LIMIT 1);

/*************************** Electronic ****************************************/
Select @ElectronicGenreID := id From genre where `name` = 'Electronic';
INSERT INTO audio (file_name, description, path, extension, genre, added_on)
Select 'Neutron Showcase', 'Runaway Synth', '/Electronic', '.mp3', @ElectronicGenreID, current_date
WHERE NOT EXISTS (SELECT * FROM audio WHERE file_name = 'Neutron Showcase' LIMIT 1);

INSERT INTO audio (file_name, description, path, extension, genre, added_on)
Select 'Cthulhu', 'Piano and Arpeggios', '/Electronic', '.mp3', @ElectronicGenreID, current_date
WHERE NOT EXISTS (SELECT * FROM audio WHERE file_name = 'Cthulhu' LIMIT 1);

INSERT INTO audio (file_name, description, path, extension, genre, added_on)
Select 'Slammed Corder', 'Pissed Off Tape Machine', '/Electronic', '.mp3', @ElectronicGenreID, current_date
WHERE NOT EXISTS (SELECT * FROM audio WHERE file_name = 'Slammed Corder' LIMIT 1);

INSERT INTO audio (file_name, description, path, extension, genre, added_on)
Select 'SubHarmon', 'The Original Subharmonics', '/Electronic', '.mp3', @ElectronicGenreID, current_date
WHERE NOT EXISTS (SELECT * FROM audio WHERE file_name = 'SubHarmon' LIMIT 1);

INSERT INTO audio (file_name, description, path, extension, genre, added_on)
Select 'PreSubHarmon', 'Groving Subharmonics on the Neutron', '/Electronic', '.mp3', @ElectronicGenreID, current_date
WHERE NOT EXISTS (SELECT * FROM audio WHERE file_name = 'PreSubHarmon' LIMIT 1);

/*************************** Chill ****************************************/
Select @ChillGenreID := id From genre where `name` = 'Chill';
INSERT INTO audio (file_name, description, path, extension, genre, added_on)
Select 'Isomatic', 'Jake Bowen Inspiration', '/Chill', '.mp3', @ChillGenreID, current_date
WHERE NOT EXISTS (SELECT * FROM audio WHERE file_name = 'Isomatic' LIMIT 1);

INSERT INTO audio (file_name, description, path, extension, genre, added_on)
Select '57 Caps', 'Lush Landscape', '/Chill', '.mp3', @ChillGenreID, current_date
WHERE NOT EXISTS (SELECT * FROM audio WHERE file_name = '57 Caps' LIMIT 1);

INSERT INTO audio (file_name, description, path, extension, genre, added_on)
Select 'AntiWeen', 'A cold, yet comfortable memory', '/Chill', '.mp3', @ChillGenreID, current_date
WHERE NOT EXISTS (SELECT * FROM audio WHERE file_name = 'AntiWeen' LIMIT 1);

INSERT INTO audio (file_name, description, path, extension, genre, added_on)
Select 'Norns Lounge', 'A Digital elevator', '/Chill', '.mp3', @ChillGenreID, current_date
WHERE NOT EXISTS (SELECT * FROM audio WHERE file_name = 'Norns Lounge' LIMIT 1);

INSERT INTO audio (file_name, description, path, extension, genre, added_on)
Select 'Birch Street Lofi', 'A Road Remembered', '/Chill', '.mp3', @ChillGenreID, current_date
WHERE NOT EXISTS (SELECT * FROM audio WHERE file_name = 'Birch Street Lofi' LIMIT 1);

INSERT INTO audio (file_name, description, path, extension, genre, added_on)
Select 'FM And a Maine Made Flute', 'Cultural Fire Pit', '/Chill', '.mp3', @ChillGenreID, current_date
WHERE NOT EXISTS (SELECT * FROM audio WHERE file_name = 'FM And a Maine Made Flute' LIMIT 1);
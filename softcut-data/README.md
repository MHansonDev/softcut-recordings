# media-collection
Node JS & MySQL Studies. Media Attribute Storage & API

## Project Setup
Execute MySql Schema/Data Changes
```
src/database/Schema Changes.sql
 - genre.sql
 - media_type.sql
 - audio.sql
```

```
npm install
```

```
node src/media-collection.js
```

## Docker Setup
Run Docker Compose from root directory
After softcut-data container is running, execute the following to connect to MYSQL media DB:
```
mysql -h localhost -u root -p
```

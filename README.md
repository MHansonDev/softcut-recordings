
# softcut-recordings
 Experimental music website
 
![home-thin-border](https://user-images.githubusercontent.com/867946/181144111-515a0243-29a7-48e6-90e2-a294a21f1db8.jpg)
 * Written in Angular 13 / Express JS / MySQL
 * Documentation of a home music production setup
 * Archive of rendered Cubase projects
 
 
 ## Docker Install:
  - Requirements: Docker Engine (from root directory)

```
docker compose up
```
 

 ##  Angular Project Development Setup (from softcut-ui):
```
npm install
```

```
ng serve
```

## Angular Unit Tests
```
ng test
```

## Test API Development Setup (from softcut-data)
```
node src/media-collection.js
```

## Local MySQL service running (Port 3306)

## Initial deployments (static):
https://neon-medovik-ebdc5c.netlify.app/
http://softcut-recordings-static.s3-website-us-east-1.amazonaws.com/

FROM node:16
WORKDIR /softcut-data

COPY package*.json /softcut-data

RUN npm i
# If you are building your code for production
# RUN npm ci --only=production

COPY /src .
EXPOSE 3001

CMD node media-collection.js

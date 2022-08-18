FROM node:16-alpine
WORKDIR /softcut-ui

COPY package.json /softcut-ui
RUN npm i

COPY . /src
EXPOSE 4200

WORKDIR /src

RUN npm run build
CMD npm start
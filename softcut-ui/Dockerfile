FROM node:16-alpine
WORKDIR /softcut-ui

COPY package.json /softcut-ui


COPY . /src
EXPOSE 4200

WORKDIR /src

RUN npm install
RUN ./node_modules/.bin/ng build --prod

RUN npm run build
CMD npm start

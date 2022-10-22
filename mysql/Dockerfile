FROM mysql:5.7

WORKDIR /mysql

COPY ../softcut-data/src/database/scripts/init_schema.sql /mysql

ENV MYSQL_ROOT_PASSWORD=password
ENV MYSQL_DATABASE=Media
ENV MYSQL_USER=user
ENV MYSQL_PASSWORD=password


EXPOSE 3306

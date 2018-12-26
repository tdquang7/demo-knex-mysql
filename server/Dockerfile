FROM node:latest
RUN mkdir /usr/app
COPY . /usr/app
WORKDIR /usr/app
RUN yarn install
RUN yarn global add knex mysql2
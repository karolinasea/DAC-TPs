FROM node:latest
WORKDIR /usr/src/
COPY app/ /usr/src
RUN npm install
EXPOSE 8080
CMD [ "node", "server.js" ]
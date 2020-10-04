FROM node
EXPOSE 8080
RUN mkdir /src
COPY . /src
WORKDIR /src
CMD npm start
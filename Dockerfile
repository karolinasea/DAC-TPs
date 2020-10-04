FROM node
EXPOSE 8080
RUN mkdir /src \ 
&& apt-get update -yq \
&& npm install express 
COPY /app /src
WORKDIR /src
CMD node server.js 8080
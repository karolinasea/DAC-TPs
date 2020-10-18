'use strict';

const express = require('express');
let mysql = require('mysql');

const PORT = 8080;
const HOST = '0.0.0.0';

const app = express();
app.get('/', (req, res) => {
  res.sendfile('./index.html');
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);

let connection = mysql.createConnection({
    host: 'db',
    user: 'root',
    password: 'example',
});

connection.connect(function(err) {
  if (err) {
    return console.error('error: ' + err.message);
  }
  console.log('Connected to MySQL server.');
});

// connection.connect(function(err) {
//   if (err) throw err;
//   console.log("Connected!");
//   var sql = "INSERT INTO messages (message) VALUES ('')";
//   con.query(sql, function (err, result) {
//     if (err) throw err;
//     console.log("1 message inserted");
//   });
// });


app.get("/getmessage", function (request, response){
     var message = request.query.message;
 
     if (message != "") {
         //enter it in data base and display it on the page
     } else {
         response.send("Please provide us first name");
     }
 });












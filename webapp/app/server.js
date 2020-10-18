'use strict';

const express = require('express');
let mysql = require('mysql');
let id = 0;

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
    database: 'messages'
});

connection.connect(function(err) {
    if (err) {
      return console.error('ERROR: ' + err.message);
    }
    console.log('Connected to MySQL server.');
  });


// app.get("/connectdb", function (request, response){
//     connection.query("SELECT * FROM messages", function (err, result, fields) {
//     if (err) {
//     	console.log('ERROR FROM MYSQL DB');
//     	throw err;
//     }
//     console.log(result);
//     console.log("THE TABLE messages EXISTS SO IT'S ALL GOOD");
//   	});
//  });


app.get("/getmessage", function (request, response){
    let message = request.query.message;
 	// let msg = window.document.getElementById("messageWebPage").value;
    if (message != "") {
    	// var sql = "INSERT INTO messages (id, message) VALUES ("+id+", '"+msg+"')";
  		con.query(sql, function (err, result) {
   		if (err) throw err;
    	console.log("LINE INSERTED BITCHES");
    	id=id+1;
  });
     } else {
         response.send("THANK YOU");
     }
 });













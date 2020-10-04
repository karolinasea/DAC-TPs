const express = require('express')
const app = express()
const port = 8080

app.get('/', (req, res) => {
  res.sendfile('./index.html');
})

app.listen(port, () => {
  console.log(`Server listening on port:${port}`)
})


//execute the server with the following cmd:  node server.js

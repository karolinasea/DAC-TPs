const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.sendfile('./index.html');
})

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`)
})


//execute the server with the following cmd:  node app.js
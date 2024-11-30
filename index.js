const express = require('express')
var pathToGo2rtc = require("go2rtc-static");
const { spawn } = require('child_process');

const app = express()
const PORT = 4000

const process = spawn(pathToGo2rtc);

process.stdout.on('data', (data) => {
  console.log(`stdout: ${data}`);
});

process.stderr.on('data', (data) => {
  console.error(`stderr: ${data}`);
});

process.on('close', (code) => {
  console.log(`child process exited with code   
 ${code}`);
});

app.listen(PORT, () => {
  console.log(`API listening on PORT ${PORT} `)
})

app.get('/', (req, res) => {
  res.send('Hey this is my API running 🥳')
})

app.get('/about', (req, res) => {
  res.send('This is my about route..... ')
})

// Export the Express API
module.exports = app

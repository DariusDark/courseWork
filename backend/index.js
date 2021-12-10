const fs = require('fs');
const express = require('express');
const cors = require('cors')
const app = express()
app.use(cors());

const port = 9999;

app.get('/', (req, res) => {
  res.sendStatus(200);
})


app.get('/games', (req, res) => {
  console.log(req);
  const gamesList = fs.readFileSync('games.json', 'utf-8')
  // console.log(JSON.stringify(gamesList));
  res.send(JSON.stringify(JSON.parse(gamesList).games));
})

app.get('/news', (req, res) => {
  const newsList = fs.readFileSync('news.json', 'utf-8')
  res.send(JSON.stringify(JSON.parse(newsList).news))
})


app.listen(port, () => {
  console.log('server started at port: ', port)
})









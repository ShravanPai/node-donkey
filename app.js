const express = require('express')
var cors = require('cors')
var bodyParser = require('body-parser')
const app = express()
const port = 9090

// App related classes
var Game = require('./Game');

// Data structures to store runtime game data
var gameRoomMap = {}

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.get('/donkey/game-rooms', (req, res) => {
    res.send(gameRoomMap)
})

app.post('/donkey/game-room', (req, res) => {
   let roomDetails = req.body
   gameRoomMap[roomDetails.name] = {name: roomDetails.name, host: roomDetails.host};
    res.sendStatus(200)
})

// app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))
var game = new Game('Shravan', '127.0.0.1');
app.listen(port, game.initializeGame());
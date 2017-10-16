const http        = require('http');
const express     = require('express');
const bodyParser  = require('body-parser');
const morgan      = require('morgan')
const app         = module.exports = express()
const port        = parseInt(process.env.PORT || '3000')
const server      = http.createServer(app)
const items       = require('./routes/items')

app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.use('/items', items)

server.listen(port);
server.on('error', console.error.bind(console));
server.on('listening', console.log.bind(console, 'Listening on ' + port));

const port = 4000

const boodyParser = require('body-parser')
const express = requie('express')
const server = express()

server.use(bodyParser.urlencoded({ extended: true}))
server.use(bodyParser.json())

server.listen(process.env.PORT || port, function(){

})

module.exports = server
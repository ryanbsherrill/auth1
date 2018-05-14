const express = require('express')
const mongoose = require('mongoose')
const server = express()

mongoose
.connect('mongodb://localhost/authdb')
.then(connect => console.log('connected to mongo'))
.catch(err => err)

server.get('/', (req, res) => {
  res.send({api: 'running'})
})

server.listen(8000, () => {
  console.log('yahoo!')
})
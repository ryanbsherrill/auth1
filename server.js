const express = require('express')
const mongoose = require('mongoose')
const server = express()

mongoose
.connect('mongodb://localhost/authdb')
.then(connect => console.log('connected to mongo'))
.catch(err => err)

function authenticate(req, res, next) {
  if (req.body.password === 'passwordispassword') next()
  else res.status(401).send('nah b')
}
server.use(express.json())

server.get('/', (req, res) => {
  res.send({route: '/', message: req.message})
})

server.post('/login', authenticate, (req, res) => {
  res.send('welcome to this jimmy jam jammy!')
})

server.listen(8000, () => console.log('yahoo!'))

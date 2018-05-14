const express = require('express')
const mongoose = require('mongoose')
const server = express()

const User = require('./users/user')

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

server.post('/register', (req, res) => {
  const user = new User(req.body)
  
  user
  .save()
  .then(user => res.status(201).send(user))
  .catch(err => res.status(500).send(err))
})

server.post('/login', authenticate, (req, res) => {
  res.send('welcome to this jimmy jam jammy!')
})

server.listen(8000, () => console.log('yahoo!'))

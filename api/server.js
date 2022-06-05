const express = require('express')
const helmet = require('helmet')
const cors = require('cors')
const path = require('path')

const usersRouter = require('./users/users-router');
const usersAuthRouter = require('./auth/auth-router')
const dataRouter = require('./fundsData/data-router')

const server = express()
server.use(express.json())
server.use(helmet())
server.use(cors())

server.use(express.static(path.join(__dirname, '../client')))

server.use('/api/users', usersRouter);
server.use('/api/auth', usersAuthRouter)
server.use('/api/fundsData',dataRouter)

server.get('/', (req, res) => {
  res.status(200).json(
      {   "status": 200,
          "message": 'Welcome!!!'
      });
})

server.use('*', (req, res) => {
  res.status(404).json({
      message: 'path not found',
  })
})

server.use((err, req, res, next) => { 
  res.status(err.status || 500).json({
    message: err.message,
    stack: err.stack,
  })
})

module.exports = server
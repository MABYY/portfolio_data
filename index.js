require('dotenv').config()
const server = require('./api/server')
const PORT = process.env.PORT || 9000

console.log('app environment', process.env.NODE_ENV)
server.listen(PORT, () =>{
    console.log(`Listening on port ${PORT}`)
})


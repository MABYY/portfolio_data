var configs = require('../knexfile')
var knex = require('knex')
var environment = process.env.NODE_ENV 
module.exports = knex(configs[environment]) 


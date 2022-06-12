var configs = require('../knexfile')
var knex = require('knex')
var env = process.env.NODE_ENV 
module.exports = knex(configs[env]) 


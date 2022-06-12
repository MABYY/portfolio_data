require('dotenv').config()
const pg = require('pg')

if (process.env.DATABASE_URL) {
    pg.defaults.ssl = { rejectUnauthorized: false }
}

const sharedConfig = {
    client: 'pg',
    migrations: { directory: './migrations' },
    seeds: { directory: './seeds' },
}

module.exports = {
    development: {
        ...sharedConfig,
        connection: process.env.DEV_DATABASE_URL,
    },
    test: {
        ...sharedConfig,
        connection: process.env.TESTING_DATABASE_URL,
    },
    production: {
        ...sharedConfig,
        connection: process.env.DATABASE_URL,
        pool: { min: 2, max: 10 },
    },
}






// require('dotenv').config()
// const pg = require('pg')

// if (process.env.DATABASE_URL) {
//   pg.defaults.ssl = { rejectUnauthorized: false }
// }

// module.exports = {
  //  testing : {
  //   client : 'sqlite3',
  //   connection: {
  //         filename: './data/produce.db3', 
  //     },
  //     useNullAsDefault: true,  
  //     migrations: {
  //       directory: './migrations'
  //   },
  //   seeds :{
  //       directory:'./seeds'
  
  //   },
  // },
  // testing : {
  //   client : 'pg',
  //   connection:  process.env.DATABASE_URL,
  //   pool: { min: 2 , max: 10 },

  //   migrations: {
  //       directory: './migrations'
  //   },
  //   seeds :{
  //       directory:'./seeds'
  
  //   },
    
  // },
//   development : {
//     client : 'pg',
//     connection:  process.env.DATABASE_URL,
//     pool: { min: 2 , max: 10 },

//     migrations: {
//         directory: './migrations'
//     },
//     seeds :{
//         directory:'./seeds'
  
//     },
    
//   },
// }
// https://stackoverflow.com/questions/54302088/how-to-fix-error-the-server-does-not-support-ssl-connections-when-trying-to-a
// const pg = require('pg')

// if (process.env.DATABASE_URL) {
//   pg.defaults.ssl = { rejectUnauthorized: false }
// }

// const sharedConfig = {
//   client: 'pg',
//   migrations: { directory: './api/data/migrations' },
//   seeds: { directory: './api/data/seeds' },
// }

// module.exports = {
//   development: {
//     ...sharedConfig,
//     connection: process.env.DEV_DATABASE_URL,
//   },
//   testing: {
//     ...sharedConfig,
//     connection: process.env.TESTING_DATABASE_URL,
//   },
//   production: {
//     ...sharedConfig,
//     connection: process.env.DATABASE_URL,
//     pool: { min: 2, max: 10 },
//   },
// }

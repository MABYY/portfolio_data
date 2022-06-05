const jwt = require('jsonwebtoken');
const {jwtSecret} = require('./../../config/secrets')

const restricted = (req, res, next) => {

//  const token = req.headers.authorization 
//   if(!token) {
//     return next({ status: 401, message: "Token not found"})
//   } 
//   jwt.verify(token, jwtSecret, (err, decodedToken) => {
//     if (err) {
//       next({
//         status: 401,
//         message: "Token invalid"
//       })
//     } else {
//       req.decodedToken = decodedToken
//       next()
//     }
//   })
    next()
}

const only = role_name => (req, res, next) => {

    // const token = req.headers.authorization 
    // jwt.verify(token, jwtSecret, (err, decodedToken) => {
    //     if (role_name === decodedToken.role_name) {
    //         next()
    //     } else {
    //         next({ status: 403, message: "Forbidden access" })
    //     }
    // })
    next()

  }

module.exports = {
    restricted,
    only
}
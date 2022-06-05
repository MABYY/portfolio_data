const router = require('express').Router()
const UsersAuth = require('../users/users-model')

const bcrypt = require('bcryptjs');
const { BCRYPT_ROUNDS } = require('./../../config/index')

const jwt = require('jsonwebtoken');
const {jwtSecret} = require('./../../config/secrets')


const {logger, validateBody , checkEmailExists,  checkEmailValid} = require('../users/users-middleware')


router.post('/register', logger, validateBody, checkEmailExists, async (req,res,next) => {
    
    try{
        const {username, email, password } = req.body      
        const hash = bcrypt.hashSync(password, parseInt(BCRYPT_ROUNDS) )
        
        const userData = { 'userId' : Date.now().toString(),
                           'username' : username,
                           'email': email,
                           'password': hash,
                           'role': 'user'
                        }

                        console.log('newUser')
        const newUser = await UsersAuth.add(userData)
        console.log('newUser')
        res.status(201).json(newUser[0])

    } catch (err){
        next(err)
    }
})

// 
router.post('/login', checkEmailValid, async (req,res,next) =>{
 if(bcrypt.compareSync(req.body.password, req.user.password)){
    const token = buildToken(req.user)
    res.json({
        message: `${req.user.username} is back!`,
        token: token
      })
 } else {
    next({
        status: 401,
        message: "Invalid credentials"
      })
 }
})


function buildToken(user) {
    const payload = {
      subject: user.userId,
      role_name: user.role,
      username: user.username,
    }
    const options = {
      expiresIn: '8h',
    }
    return jwt.sign(payload, jwtSecret, options)
  }



module.exports = router
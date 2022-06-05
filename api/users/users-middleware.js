const User = require('./users-model')

function logger(req, res, next) {
    const timeStamp = new Date()
    console.log(req.method, req.originalUrl, timeStamp)
    next()
  }

const validateBody = async(req, res, next ) => {
    try{
        const { username , password , email} =  req.body
        if(!username || !password || !email) {
                next({
                    status: 400,
                    message: 'username and password required'
                })

        } else {
            next()
        }

    } catch(err){
        next(err)
    }
}

const checkUserExists = async(req, res, next ) => {
    try{
        const { username } = req.body 
        const newUser = await User.findByName(username)
        if(newUser[0]){
            next({
                status: 422,
                message:'The username is already taken'})
        } else {
            next()
        }
    } catch(err){
        next(err)
    }
}

const validateUserPass = async(req, res, next ) => {
    try{
        const { email , password } = req.body 
        const newUser = await User.findByEmail(email)
        if(!newUser[0]){
            next({
                status: 404,
                message:'Ivalid user'})
        } 
        // else if( newUser[0].name !== username || newUser[0].password !== password) {
        //     next({
        //         status: 401,
        //         message:'Invalid credentials'})
        // } 
        else {
            next()
        }
    } catch(err){
        next(err)
    }
}

const checkUsernameExists = async (req, res, next) => {
        try {
        const [user] = await User.findByName(req.body.username )
        if(!user) {
            next({ status: 401, message: "Invalid credentials. Check your inputs!"})
        } else {
            req.user = user
            next()
        }
        } catch (err) {
        next(err)
        }
    }

const checkEmailExists = async(req, res, next ) => {
    try{
        const { email } = req.body 
        const newUser = await User.findByEmail(email)
        if(newUser[0]){
                next({
                    status: 409,
                    message:'The user already exits'})
            } else {
                next()
            }
        } catch(err){
            next(err)
        }
    }

const checkEmailValid = async(req, res, next ) => {
        try{
            const { email } = req.body 
            const newUser = await User.findByEmail(email)
            if(!newUser[0]){
                    next({
                        status: 404,
                        message:'Invalid credentials'})
                } else {
                    req.user = newUser[0] 
                    next()
                }
            } catch(err){
                next(err)
            }
        }    

module.exports = {
    logger,
    validateBody, 
    checkUserExists,
    validateUserPass,
    checkUsernameExists,
    checkEmailExists,
    checkEmailValid
}
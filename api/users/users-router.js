const router = require('express').Router()
const Users = require('./users-model')
const  { restricted , only} = require('../auth/auth-middleware')
//
router.get('/', restricted, only('admin'),async (req, res, next) => {
    try{
        const users = await Users.getAllUsers()
        if(users) {
            res.status(200).json(users)
        } else {
            res.status(500).json({message:'Users could not be retrived'})
        }
    } catch(err){
        next(err)
    }
})

module.exports = router;
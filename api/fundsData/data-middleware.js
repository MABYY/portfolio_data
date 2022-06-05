//const fundData = require('./data-model.js')

const validateBody = async(req, res, next ) => {
    try{
        const { Fecha , Nombre_Fondo } =  req.body
        if(!Fecha || ! Nombre_Fondo ) {
                next({
                    status: 401,
                    message: 'Missing credentials'
                })

        } else {
            next()
        }

    } catch(err){
        next(err)
    }
}

const validateDate = async(req, res, next ) => {
    try{
        const { Fecha  } =  req.body
        if(!Fecha  ) {
                next({
                    status: 401,
                    message: 'Missing credentials'
                })

        } else {
            next()
        }

    } catch(err){
        next(err)
    }
}

module.exports = {
    validateBody,
    validateDate
}

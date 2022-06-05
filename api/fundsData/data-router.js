const router = require('express').Router()
const fundsData = require('./data-model')

const { validateDate} = require('./data-middleware')

router.get('/', async (req, res, next) => {
    try{
        const fundsArr = await fundsData.findAll()
        if(!fundsArr[0]){
            res.status(401).json({message:'Invalid request'})
        } else{
            res.status(200).json(fundsArr)
        }

    } catch(err){
        next(err)
    }
})
// validateBody,
router.get('/select',  async (req, res, next) => {
    try{
        const { Fecha , Nombre_Fondo } = req.body
        const fundsArr = await fundsData.findFund(Fecha, Nombre_Fondo)
        if(!fundsArr[0]){
            res.status(404).json({message:'Fund not found'})
        } else{
            res.status(200).json(fundsArr[0])
        }

    } catch(err){
        next(err)
    }
})


router.get('/selectbydate', validateDate, async (req, res, next) => {
    try{
        const { Fecha } = req.body
        const fundsArr = await fundsData.findFundbyDate(Fecha)
        if(!fundsArr){
            res.status(404).json({message:'Fund not found'})
        } else{
            res.status(200).json(fundsArr)
        }

    } catch(err){
        next(err)
    }
})

router.post('/select',  async (req, res, next) => {
    try{
        const { Fecha , Nombre_Fondo } = req.body
        const fundsArr = await fundsData.findFund(Fecha, Nombre_Fondo)
        if(!fundsArr[0]){
            res.status(404).json({message:'Fund not found'})
        } else{
            res.status(200).json(fundsArr[0])
        }

    } catch(err){
        next(err)
    }
})


router.post('/selectbydate', validateDate, async (req, res, next) => {
    try{
        const { Fecha } = req.body
        const fundsArr = await fundsData.findFundbyDate(Fecha)
        if(!fundsArr){
            res.status(404).json({message:'Fund not found'})
        } else{
            res.status(200).json(fundsArr)
        }

    } catch(err){
        next(err)
    }
})

module.exports = router;

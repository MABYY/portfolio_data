const db = require('../../data/db-config')

async function findFund(Fecha, Nombre_Fondo){
    return await db('fundData')
        .where('Fecha',Fecha)
        .where('Nombre_Fondo',Nombre_Fondo)
}

async function findFundbyDate(Fecha){
    return await db('fundData')
    .where('Fecha',Fecha)
    .select(['Nombre_Fondo'])
    .distinct(['Nombre_Fondo'])
    
}

async function findAll(){
    return await db('fundData')
}

module.exports = {
    findFund,
    findAll,
    findFundbyDate
}
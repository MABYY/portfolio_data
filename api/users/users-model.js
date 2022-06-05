const db = require('../../data/db-config')

function getAllUsers() {
    return db('usersData')
}


function findById(userId){
    return db('usersData')
        .where('userId', userId)
        .first()
}

async function updateUserById(userId,changes) {
    const updatedUser = await db('usersData').where({ userId }).update(changes)
    return  updatedUser
}


async function findByName(username){
    return await db('usersData')
        .where('username',username)
}

async function findByEmail(email){
    return await db('usersData')
        .where('email',email)
}


async function add(newUser){
    await db('usersData').insert(newUser)
    return  findByName(newUser.username)
}


async function deleteUserById(userId){
    return db('usersData').where('userId', userId).del();

}

module.exports = {
    add,
    findByName,
    findById,
    deleteUserById,
    getAllUsers,
    updateUserById,
    findByEmail
}
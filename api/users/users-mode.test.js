const dbConfig = require('../../data/db-config')
const Users = require('./users-model')

test('Check test environment', () =>{
    expect(process.env.NODE_ENV).toBe('testing')
})

beforeAll(async () => {  
    await dbConfig.migrate.rollback()
    await dbConfig.migrate.latest()
})

beforeEach(async () => {
    await dbConfig.seed.run()
})

afterAll(async () => {
    await dbConfig.destroy()
})

describe('Test users table', () => {
    describe('Test access to table', () => {
        it('Test getAllUsers function', async () => {
            const data = await Users.getAllUsers()
            expect(data.length).toBeGreaterThanOrEqual(1)
        })
        it('Test getAllUsers properties', async () => {
            const data = await Users.getAllUsers()
            expect(data[0]).toHaveProperty('userId')
            expect(data[0]).toHaveProperty('username')
            expect(data[0]).toHaveProperty('password')
            expect(data[0]).toHaveProperty('role')
        })

        it('Test getAllUsers datatypes', async () => {
            const data = await Users.getAllUsers()
            expect(typeof data[0].userId).toBe('string')
            expect(typeof data[0].username).toBe('string')
            expect(typeof data[0].password).toBe('string')
            expect(typeof data[0].role).toBe('string')
          
        })
    })
    describe('Test access to user', () => {
        it('Test findById function', async () => {
            const findUser = await Users.findById('2')
            //console.log(findUser)
            expect(findUser).toMatchObject({
                                    userId: '2',
                                    username: 'user2',
                                    password: 'user2',
                                    role: 'user'
                                    })
        })
    })

    describe('Test access to user', () => {
        it('Test findByName function', async () => {
            const findName = await Users.findByName('user2')
            //console.log(findName)
            expect(findName[0]).toMatchObject({
                                    userId: '2',
                                    username: 'user2',
                                    password: 'user2',
                                    role: 'user'
                                    })
        })
    })

    describe('Add user', () => {
        it('Test add function', async () => {
            const insertName = await Users.add({
                userId: '4',
                username: 'Bloomtech',
                password: 'bloomtech',
                role: 'user'
                })
            expect(insertName[0]).toMatchObject({
                userId: '4',
                username: 'Bloomtech',
                password: 'bloomtech',
                role: 'user'
                })
        })
    })

    describe('Delete user', () => {
        it('Test deleteUserById function', async () => {
            const findName = await Users.deleteUserById('2')
            expect(findName).toBe(1)
        })
    })  
})
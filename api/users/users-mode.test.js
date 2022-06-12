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
            expect(data[0]).toHaveProperty('email')
            expect(data[0]).toHaveProperty('username')
            expect(data[0]).toHaveProperty('password')
            expect(data[0]).toHaveProperty('role')
        })

        it('Test getAllUsers datatypes', async () => {
            const data = await Users.getAllUsers()
            expect(typeof data[0].userId).toBe('string')
            expect(typeof data[0].email).toBe('string')
            expect(typeof data[0].username).toBe('string')
            expect(typeof data[0].password).toBe('string')
            expect(typeof data[0].role).toBe('string')
          
        })
    })
    describe('Test access to user', () => {
        it('Test findById function', async () => {
            const findUser = await Users.findById('1655039180958')
            //console.log(findUser)
            expect(findUser).toMatchObject({
                                    userId: '1655039180958',
                                    email: 'user1@gmail.com',
                                    username: 'user1',
                                    password: '$2a$08$id3DD0Fljm.jgkS233Sod.YTBXeA52NfZQ8UgUtGmAdSiANc5m6MS',
                                    role: 'user'
                                    })
        })
    })

    describe('Test access to user', () => {
        it('Test findByName function', async () => {
            const findName = await Users.findByName('user2')
            //console.log(findName)
            expect(findName[0]).toMatchObject({
                                    userId: '1655039069796',
                                    email:'user2@gmail.com',
                                    username: 'user2',
                                    password:  "$2a$08$vKOOnkGuVBKBC2xRieBObOTZfyuWrp6gHLtTVLv5.u8tYHowN5yRi",
                                    role: 'user'
                                    })
        })
    })

    describe('Add user', () => {
        it('Test add function', async () => {
            const insertName = await Users.add({
                userId: '41655039069797',
                email:'bloomtech@gmail.com',
                username: 'Bloomtech',
                password: '123456',
                role: 'user'
                })
            expect(insertName[0]).toMatchObject({
                userId: '41655039069797',
                email:'bloomtech@gmail.com',
                username: 'Bloomtech',
                password: '123456',
                role: 'user'
                })
        })
    })

    describe('Delete user', () => {
        it('Test deleteUserById function', async () => {
            const findName = await Users.deleteUserById('1655039180958')
            expect(findName).toBe(1)
        })
    })  
})
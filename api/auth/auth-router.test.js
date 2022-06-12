const server = require('../server')
const request = require('supertest')
const dbConfig = require('../../data/db-config')


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


describe('[GET] /', () => {
    test('responds with all the users', async () => {
      const res = await request(server).get('/api/users/')
      expect(res.statusCode).toBe(200)
      expect(res.body).toHaveLength(3)
    })
  })


describe('[POST] /register', () => {
     test('Registers new user', async () => {
        const res = await request(server)
            .post('/api/auth/register').send({ email: 'user1@gmail.com' , password: '1234'})
            expect(res.statusCode).toBe(201)
            expect(res.body.username).toBe('user1')
        })
    
  })

  describe('[POST] /auth/login', () => {
    test('Login existing user', async () => {
       const res = await request(server)
           .post('/api/auth/login').send({username: 'user1', password:'user1'})
           expect(res.statusCode).toBe(200)
           expect(res.body.message).toBe('user1 is back!')
       })
   
 })
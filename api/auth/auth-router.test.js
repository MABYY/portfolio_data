const server = require('../server')
const request = require('supertest')
const dbConfig = require('../../data/db-config')

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

describe('[POST] /register', () => {
     test('Registers new user', async () => {
        const res = await request(server)
            .post('/api/auth/register').send({ username: 'user4',
                                                email: 'user4@gmail.com' , 
                                                password: "123456"})

            expect(res.statusCode).toBe(201)
            expect(res.body.username).toBe('user4')
        })
    
  })

  describe('[POST] /login', () => {
    test('Login existing user', async () => {
       const res = await request(server)
           .post('/api/auth/login').send({ email: 'admin@gmail.com', 
                                           password:"123456"
                                        })
           expect(res.statusCode).toBe(201)
           
       })
   
    describe('[GET] /', () => {
        test('responds with all the users', async () => {
          const res = await request(server)
          .get('/api/users/')
          .set({"authorization": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWJqZWN0IjoiMTY1NTAzOTMwMDk4MyIsInJvbGVfbmFtZSI6ImFkbWluIiwidXNlcm5hbWUiOiJhZG1pbiIsImlhdCI6MTY1NTA0MDE0MywiZXhwIjoxNjU1MDY4OTQzfQ.ICNVqc2tNBoplhKDwf12PEVZxpTbSNCLFtx4n9z8ICY"})
          expect(res.statusCode).toBe(200)
          expect(res.body).toHaveLength(3)

          
        })
      })
    
 })
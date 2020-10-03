import request from 'supertest'
import app from '../src/app'

describe('Home Controller', () => {
    test('should retrieve the app version', () => {
        return request(app)
          .get('/')
          .expect(200)
          .expect(({ body }) => {
            expect(body).toHaveProperty('brand')
            expect(body).toHaveProperty('user')
          })
      })
})
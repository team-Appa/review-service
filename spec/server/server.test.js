const app = require('../../server/index.js');

const request = require('supertest');

describe('Test the API endpoint', () => {
  test('It should respond with status 200 from GET method on sucess', (done) => {
    return request(app)
      .get('/api/reviews?id=2')
      .then(response => {
        expect(response.status).toBe(200);
        done();
      });
  });

  // implement post request test here
});
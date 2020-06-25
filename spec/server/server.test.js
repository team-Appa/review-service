const app = require('../../server/index.js');

const request = require('supertest');

describe('Test the API endpoint', () => {
  test('It should receive a response from GET method', (done) => {
    return request(app)
      .get('/api/reviews')
      .then(response => {
        expect(response.status).toBe(200);
        done();
      });
  });

  // implement post request test here
});
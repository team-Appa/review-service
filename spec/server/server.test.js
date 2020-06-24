const app = require('../../server/index.js');

const request = require('supertest');

describe('Test the API endpoint', () => {
  test('It should receive a response from GET method', async () => {
    return request(app)
      .get('/api/reviews')
      .then(response => {
        expect(response.status).toBe(200);
      });
  });

  test('GET method returns an array of listings', async () => {
    return request(app)
      .get('/api/reviews')
      .then(response => {
        expect(Array.isArray(response.body)).toBe(true);
        expect(response.body[1]).toHaveProperty('name');
        expect(response.body[1]).toHaveProperty('comment');
        expect(response.body[1]).toHaveProperty('star');
      });
  });
});
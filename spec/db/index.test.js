const app = require('../../server/index.js');

const request = require('supertest');


describe('Test to see if data gets retrieved properly', () => {
  const randomlyPickedData = Math.floor(Math.random() * 10);

  test('GET method returns an array of listings', async () => {
    return request(app)
      .get('/api/reviews')
      .then(response => {
        expect(Array.isArray(response.body)).toBe(true);
        expect(response.body[1]).toHaveProperty('name');
        expect(response.body[1]).toHaveProperty('location');
        expect(response.body[1]).toHaveProperty('timestamp');
        expect(response.body[1]).toHaveProperty('title');
        expect(response.body[1]).toHaveProperty('comment');
        expect(response.body[1]).toHaveProperty('like');
        expect(response.body[1]).toHaveProperty('dislike');
        expect(response.body[1]).toHaveProperty('star');
      });
  });

  test('Randomly picked data has correct properties', async () => {
    return request(app)
      .get('/api/reviews')
      .then(response => {
        expect(Array.isArray(response.body)).toBe(true);
        expect(response.body[randomlyPickedData]).toHaveProperty('name');
        expect(response.body[randomlyPickedData]).toHaveProperty('location');
        expect(response.body[randomlyPickedData]).toHaveProperty('timestamp');
        expect(response.body[randomlyPickedData]).toHaveProperty('title');
        expect(response.body[randomlyPickedData]).toHaveProperty('comment');
        expect(response.body[randomlyPickedData]).toHaveProperty('like');
        expect(response.body[randomlyPickedData]).toHaveProperty('dislike');
        expect(response.body[randomlyPickedData]).toHaveProperty('star');
      });
  });
});
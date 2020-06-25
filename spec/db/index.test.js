const app = require('../../server/index.js');

const request = require('supertest');


describe('Test to see if data gets retrieved properly', () => {
  const randomlyPickedData = Math.floor(Math.random() * 10);

  test('GET method returns an array of listings', (done) => {
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
        done();
      });
  });

  test('Randomly picked data has correct properties', (done) => {
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
        done();
      });
  });
});

describe('Test to see if data gets updated properly', () => {
  const service = {
    _id: "5eebf056630c880a52299514",
    like: 13,
    dislike: 18
  };

  const serviceWithUnknowID = {
    _id: "notvalid123",
    like: 1,
    dislike: 0
  }

  test('Increments like count by 1', (done) => {
    return request(app)
      .patch('/api/reviews')
      .send(service)
      .then(response => {
        expect(response.body.like).toBe(service.like + 1);
        done();
      });
  });

  test('Increments dislike count by 1', (done) => {
    return request(app)
      .patch('/api/reviews')
      .send(service)
      .then(response => {
        expect(response.body.dislike).toBe(service.dislike + 1);
        done();
      });
  });

  test('Should return when the provided ID does not exist', (done) => {
    return request(app)
      .patch('/api/reviews')
      .send(serviceWithUnknowID)
      .then(response => {
        expect(response.body.dislike).toBeUndefined();
        done();
      });
  });
});
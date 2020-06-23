const faker = require('../../faker/faker.js');

test('faker module properly generates sample data', () => {
  const amountOfData = 1;
  const dataLength = faker.fill(amountOfData);

  expect(dataLength.length).toBe(amountOfData);
  expect(dataLength[0].title).not.toBeUndefined();
});
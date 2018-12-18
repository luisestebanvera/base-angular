let faker = require('faker');

let productsMock = [];

for (let i = 0; i < 2; i++) {
  productsMock.push({
    "name": faker.name.firstName(),
    "id": faker.random.number(),
    "description": faker.lorem.text()
  });
}

module.exports.products = productsMock;


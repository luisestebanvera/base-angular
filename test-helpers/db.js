let faker = require('faker');

let generateDB = () => {
  let user = {
    "name": faker.name.findName(),
    "address": faker.random.number(),
    "avatar": faker.image.avatar()
  };

  let products = [];

  for (let i = 0; i < 2; i++) {
    products.push({
      "name": faker.name.firstName(),
      "id": faker.random.number(),
      "description": faker.lorem.text()
    });
  }


  return {
    "user": [user],
    "products": products
  }
};

module.exports = generateDB;

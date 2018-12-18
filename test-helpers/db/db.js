let userDB = require('./user');
let productsDB = require('./products');

let generateDB = () => {

  return {
    "user": [ userDB.user ],
    "products": productsDB.products,
    "otra": [{
      "tomalo": 123
    }]
  }
};

module.exports = generateDB;

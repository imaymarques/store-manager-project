const salesModel = [
  {
    "saleId": 1,
    "date": "2022-11-17T15:37:57.000Z",
    "productId": 1,
    "quantity": 5
  },
  {
    "saleId": 1,
    "date": "2022-11-17T15:37:57.000Z",
    "productId": 2,
    "quantity": 10
  },
  {
    "saleId": 2,
    "date": "2022-11-17T15:37:57.000Z",
    "productId": 3,
    "quantity": 15
  }
];

//id 2

const salesById = [
  {
    "date": "2022-11-17T15:37:57.000Z",
    "productId": 3,
    "quantity": 15
  }
];

const newSale = [
  {
    "productId": 3,
    "quantity": 2
  }
];

module.exports = {
  salesModel,
  salesById,
  newSale,
};
const salesModel = require('../models/sales.model');

const insertSale = async (sale) => {
  const { id } = await salesModel.salesId();
  await Promise.all(sale.map(async (el) => salesModel.insertSales(id, el)));
  return { type: 201, message: id };
};

module.exports = {
  insertSale,
};
const salesService = require('../services/sales.service');

const insertSalesOfProducts = async (req, res) => {
  const sale = req.body;
  const { type, message } = await salesService.insertSale(sale);
  console.log(type);
  res.status(201).json({ id: message, itemsSold: sale });
};

module.exports = {
  insertSalesOfProducts,
};
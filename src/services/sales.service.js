const salesModel = require('../models/sales.model');

const insertSale = async (sale) => {
  const { id } = await salesModel.salesId();
  await Promise.all(sale.map(async (el) => salesModel.insertSales(id, el)));
  return { type: 201, message: id };
};

const getSales = async () => {
  const sales = await salesModel.getSales();
  return { type: null, message: sales };
};

const getSalesById = async (id) => {
  const result = await salesModel.getSalesById(id);
  if (!result || result.length === 0) return { type: 404, message: 'Sale not found' };
  return { type: null, message: result };
};

const deleteSale = async (id) => {
  const response = await salesModel.getSalesById(id);
  if (!response || response.length === 0) return { type: 404, message: 'Sale not found' };
  await salesModel.deleteSale(id);
  return { type: null, message: null };
};

module.exports = {
  insertSale,
  getSales,
  getSalesById,
  deleteSale,
};
const salesService = require('../services/sales.service');

const insertSalesOfProducts = async (req, res) => {
  const sale = req.body;
  const { message } = await salesService.insertSale(sale);
  res.status(201).json({ id: message, itemsSold: sale });
};

const getSales = async (_req, res) => {
  const { type, message } = await salesService.getSales();
  if (type) return res.status(type).json(message);
  return res.status(200).json(message);
};

const getSalesById = async (req, res) => {
  const { id } = req.params;
  const { type, message } = await salesService.getSalesById(Number(id));
  if (type) return res.status(type).json({ message });
  return res.status(200).json(message);
};

const deleteSale = async (req, res) => {
  const { id } = req.params;
  const { type, message } = await salesService.deleteSale(id);

  if (type) return res.status(type).json({ message });

  return res.status(204).end();
};

module.exports = {
  insertSalesOfProducts,
  getSales,
  getSalesById,
  deleteSale,
};
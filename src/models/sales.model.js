const camelize = require('camelize');
const connection = require('../conection');

const salesId = async () => {
  const date = new Date();
  const [{ insertId }] = await connection.execute(
    'INSERT INTO StoreManager.sales (date) VALUES (?)', [date],
  );
  return { id: insertId };
};

const insertSales = async (saleId, { productId, quantity }) => {
  await connection.execute(
    'INSERT INTO StoreManager.sales_products (sale_id, product_id, quantity) VALUES (?, ?, ?)',
    [saleId, productId, quantity],
  );
  return { saleId, productId, quantity };
};

const getSales = async () => {
  const [result] = await connection.execute(
    `SELECT sale_id, date, product_id, quantity
    FROM StoreManager.sales AS sales
    INNER JOIN StoreManager.sales_products AS products
    ON sales.id = products.sale_id
    ORDER BY id, product_id`,
  );
  return camelize(result);
};

const getSalesById = async (id) => {
  const [result] = await connection.execute(
    `SELECT date, product_id, quantity
    FROM StoreManager.sales AS sales
    INNER JOIN StoreManager.sales_products AS products
    ON sales.id = products.sale_id
    WHERE id = ?
    ORDER BY id, product_id`, [id],
  );
  return camelize(result);
};

const deleteSale = async (id) => {
  const [result] = await connection.execute(`
    DELETE FROM StoreManager.sales WHERE id = ?
  `, [id]);

  return result;
};

module.exports = {
  insertSales,
  salesId,
  getSales,
  getSalesById,
  deleteSale,
};
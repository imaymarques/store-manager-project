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

module.exports = {
  insertSales,
  salesId,
};
const connection = require('../conection');

const getProducts = async () => {
  const [result] = await connection.execute(
    'SELECT * FROM StoreManager.products',
  );
  return result;
};

const getProductsById = async (id) => {
  const [[result]] = await connection.execute(
    'SELECT * from StoreManager.products WHERE id = ?', [id],
  );
  return result;
};

// Refatorando as funções na camada Model pra simplificar, deixando uma função só

const insertProducts = async (item) => {
  const [{ insertId }] = await connection.execute(
    'INSERT INTO StoreManager.products (name) VALUE (?)', [item],
);

  return { id: insertId };
};

const updateProducts = async (id, name) => {
  const [result] = await connection.execute(`
    UPDATE StoreManager.products SET name = ? WHERE id = ?
  `, [name, id]);

  return result;
};

const deleteProduct = async (id) => {
  const [result] = await connection.execute(`
    DELETE FROM StoreManager.products WHERE id = ?
  `, [id]);

  return result;
};

module.exports = {
  getProducts,
  getProductsById,
  insertProducts,
  updateProducts,
  deleteProduct,
};
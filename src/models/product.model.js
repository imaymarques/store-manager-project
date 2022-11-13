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
  const [{ insertId }] = await connection.execute('INSERT INTO products (name) VALUES (?)', [item]);

  return { id: insertId };
};

module.exports = {
  getProducts,
  getProductsById,
  insertProducts,
};
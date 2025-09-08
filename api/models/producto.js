const pool = require('../db');

module.exports = {
  getAll: async () => {
    const res = await pool.query('SELECT * FROM productos_boutique ORDER BY id DESC');
    return res.rows;
  },
  create: async (data) => {
    const { nombre, talla, precio, tipo, imagen } = data;
    const res = await pool.query(
      'INSERT INTO productos_boutique (nombre, talla, precio, tipo, imagen) VALUES ($1,$2,$3,$4,$5) RETURNING *',
      [nombre, talla, precio, tipo, imagen]
    );
    return res.rows[0];
  },
  update: async (id, data) => {
    const { nombre, talla, precio, tipo, imagen } = data;
    const res = await pool.query(
      'UPDATE productos_boutique SET nombre=$1, talla=$2, precio=$3, tipo=$4, imagen=$5 WHERE id=$6 RETURNING *',
      [nombre, talla, precio, tipo, imagen, id]
    );
    return res.rows[0];
  },
  delete: async (id) => {
    await pool.query('DELETE FROM productos_boutique WHERE id=$1', [id]);
    return { success: true };
  },
  getById: async (id) => {
    const res = await pool.query('SELECT * FROM productos_boutique WHERE id=$1', [id]);
    return res.rows[0];
  }
};

const pool = require('../db');

module.exports = {
  getAll: async () => {
    const res = await pool.query('SELECT * FROM pacas ORDER BY id DESC');
    return res.rows;
  },
  create: async (data) => {
    const { nombre, precio, tipo, descripcion, prendas, imagen, marca, disponible } = data;
    const res = await pool.query(
      'INSERT INTO pacas (nombre, precio, tipo, descripcion, prendas, imagen, marca, disponible) VALUES ($1,$2,$3,$4,$5,$6,$7,$8) RETURNING *',
      [nombre, precio, tipo, descripcion, prendas, imagen, marca, disponible]
    );
    return res.rows[0];
  },
  update: async (id, data) => {
    const { nombre, precio, tipo, descripcion, prendas, imagen, marca, disponible } = data;
    const res = await pool.query(
      'UPDATE pacas SET nombre=$1, precio=$2, tipo=$3, descripcion=$4, prendas=$5, imagen=$6, marca=$7, disponible=$8 WHERE id=$9 RETURNING *',
      [nombre, precio, tipo, descripcion, prendas, imagen, marca, disponible, id]
    );
    return res.rows[0];
  },
  delete: async (id) => {
    await pool.query('DELETE FROM pacas WHERE id=$1', [id]);
    return { success: true };
  },
  getById: async (id) => {
    const res = await pool.query('SELECT * FROM pacas WHERE id=$1', [id]);
    return res.rows[0];
  }
};

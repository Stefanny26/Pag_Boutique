import pool from "./db.js";

class Paca {
  // Obtener todas las pacas
  static async getAll() {
    const result = await pool.query("SELECT * FROM pacas");
    return result.rows;
  }

  // Obtener una paca por ID
  static async getById(id) {
    const result = await pool.query("SELECT * FROM pacas WHERE id=$1", [id]);
    return result.rows[0];
  }

  // Crear una nueva paca
  static async create(data) {
    const result = await pool.query(
      `INSERT INTO pacas 
        (nombre, precio, tipo, descripcion, prendas, imagen, marca, disponible)
       VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *`,
      [
        data.nombre,
        data.precio,
        data.tipo,
        data.descripcion,
        data.prendas,
        data.imagen,
        data.marca,
        data.disponible ?? true
      ]
    );
    return result.rows[0];
  }

  // Actualizar una paca existente
  static async update(id, data) {
    const result = await pool.query(
      `UPDATE pacas SET
        nombre=$1, precio=$2, tipo=$3, descripcion=$4, prendas=$5, imagen=$6, marca=$7, disponible=$8
       WHERE id=$9 RETURNING *`,
      [
        data.nombre,
        data.precio,
        data.tipo,
        data.descripcion,
        data.prendas,
        data.imagen,
        data.marca,
        data.disponible ?? true,
        id
      ]
    );
    return result.rows[0];
  }

  // Eliminar una paca
  static async delete(id) {
    await pool.query("DELETE FROM pacas WHERE id=$1", [id]);
  }
}

export default Paca;

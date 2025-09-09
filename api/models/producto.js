import pool from "./db.js";

class Producto {
  // Obtener todos los productos
  static async getAll() {
    const result = await pool.query("SELECT * FROM productos_boutique");
    return result.rows;
  }

  // Obtener un producto por ID
  static async getById(id) {
    const result = await pool.query(
      "SELECT * FROM productos_boutique WHERE id=$1",
      [id]
    );
    return result.rows[0];
  }

  // Crear un nuevo producto
  static async create(data) {
    const result = await pool.query(
      `INSERT INTO productos_boutique 
       (nombre, talla, precio, tipo, imagen) 
       VALUES ($1, $2, $3, $4, $5) RETURNING *`,
      [data.nombre, data.talla, data.precio, data.tipo, data.imagen]
    );
    return result.rows[0];
  }

  // Actualizar un producto existente
  static async update(id, data) {
    const result = await pool.query(
      `UPDATE productos_boutique SET 
        nombre=$1, talla=$2, precio=$3, tipo=$4, imagen=$5 
       WHERE id=$6 RETURNING *`,
      [data.nombre, data.talla, data.precio, data.tipo, data.imagen, id]
    );
    return result.rows[0];
  }

  // Eliminar un producto
  static async delete(id) {
    await pool.query("DELETE FROM productos_boutique WHERE id=$1", [id]);
  }
}

export default Producto;

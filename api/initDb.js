import { readFileSync } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import pool from './models/db.js';

// Configurar __dirname en ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/**
 * Inicializa el esquema de la base de datos si no existe
 * Se ejecuta al iniciar el servidor
 */
export async function initializeDatabase() {
  console.log('Verificando esquema de la base de datos...');
  
  try {
    // Verificar si las tablas ya existen
    const checkTablesQuery = `
      SELECT EXISTS (
        SELECT FROM information_schema.tables 
        WHERE table_name = 'pacas'
      ) AS pacas_exists,
      EXISTS (
        SELECT FROM information_schema.tables 
        WHERE table_name = 'productos_boutique'
      ) AS productos_exists;
    `;
    
    const { rows } = await pool.query(checkTablesQuery);
    const { pacas_exists, productos_exists } = rows[0];
    
    // Si ambas tablas existen, no hacemos nada
    if (pacas_exists && productos_exists) {
      console.log('✅ El esquema ya existe en la base de datos');
      return;
    }
    
    // Si falta alguna tabla, aplicamos el esquema
    console.log('Creando esquema de la base de datos...');
    const schemaPath = path.join(__dirname, 'schema.sql');
    const schemaSql = readFileSync(schemaPath, 'utf8');
    
    await pool.query(schemaSql);
    console.log('✅ Esquema creado correctamente en la base de datos');
  } catch (error) {
    console.error('❌ Error al inicializar la base de datos:', error.message);
    // No lanzamos el error para que el servidor pueda iniciar de todos modos
  }
}

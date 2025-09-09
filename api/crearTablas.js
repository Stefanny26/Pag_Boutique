import pkg from "pg";
import dotenv from "dotenv";
import { readFileSync } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

dotenv.config();

const { Pool } = pkg;

// Configurar __dirname en ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function crearTablas() {
  console.log('Iniciando creación de tablas...');
  console.log('DATABASE_URL:', process.env.DATABASE_URL || 'No definida');
  
  // Leer el esquema SQL
  const schemaPath = path.join(__dirname, 'schema.sql');
  const schemaSql = readFileSync(schemaPath, 'utf8');
  console.log('Esquema SQL cargado correctamente');
  
  const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: { rejectUnauthorized: false }
  });
  
  try {
    // Conectar a la base de datos
    const client = await pool.connect();
    console.log('✅ Conexión exitosa a la base de datos');
    
    // Ejecutar el esquema SQL
    console.log('Ejecutando esquema SQL...');
    await client.query(schemaSql);
    console.log('✅ Tablas creadas correctamente');
    
    // Verificar que las tablas se crearon
    const tablesCheck = await client.query(`
      SELECT table_name 
      FROM information_schema.tables 
      WHERE table_schema = 'public' 
      AND table_name IN ('pacas', 'productos_boutique');
    `);
    
    console.log('Tablas encontradas:', tablesCheck.rows.map(row => row.table_name).join(', '));
    
    client.release();
    await pool.end();
  } catch (err) {
    console.error('❌ Error:', err);
  }
}

crearTablas().then(() => {
  console.log('Proceso completado');
  process.exit(0);
});

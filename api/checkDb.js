import pkg from "pg";
import dotenv from "dotenv";
dotenv.config();

const { Pool } = pkg;

async function checkDatabaseConnection() {
  console.log('Intentando conectar a la base de datos...');
  console.log('DATABASE_URL:', process.env.DATABASE_URL || 'No definida');
  
  try {
    const pool = new Pool({
      connectionString: process.env.DATABASE_URL,
      ssl: { rejectUnauthorized: false }
    });
    
    const client = await pool.connect();
    console.log('✅ Conexión exitosa a la base de datos');
    
    // Verificar si las tablas existen
    const tablesCheck = await client.query(`
      SELECT table_name 
      FROM information_schema.tables 
      WHERE table_schema = 'public' 
      AND table_name IN ('pacas', 'productos_boutique');
    `);
    
    console.log('Tablas encontradas:', tablesCheck.rows.map(row => row.table_name).join(', ') || 'Ninguna');
    
    // Contar registros
    if (tablesCheck.rows.length > 0) {
      for (const row of tablesCheck.rows) {
        const countQuery = await client.query(`SELECT COUNT(*) FROM ${row.table_name};`);
        console.log(`- Tabla ${row.table_name}: ${countQuery.rows[0].count} registros`);
      }
    }
    
    client.release();
    await pool.end();
  } catch (err) {
    console.error('❌ Error al conectar con la base de datos:', err);
  }
}

checkDatabaseConnection().then(() => process.exit());

/**
 * Este archivo es una solución específica para Railway
 * Carga y ejecuta server.js explícitamente
 */

import { fileURLToPath } from 'url';
import path from 'path';
import { spawn } from 'child_process';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const serverPath = path.join(__dirname, 'server.js');

console.log('Railway startup: Ejecutando servidor desde', serverPath);

// Ejecutar server.js como un proceso separado
const server = spawn('node', [serverPath], { stdio: 'inherit' });

server.on('close', (code) => {
  console.log(`Servidor cerró con código: ${code}`);
  process.exit(code);
});

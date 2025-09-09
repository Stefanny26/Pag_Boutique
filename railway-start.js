import { spawn } from 'child_process';
import path from 'path';
import { fileURLToPath } from 'url';

// Get the directory name in ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Path to the server.js file
const serverPath = path.join(__dirname, 'server.js');

console.log('Starting server from:', serverPath);

// Spawn server.js as a child process
const child = spawn('node', [serverPath], { 
  stdio: 'inherit',
  env: process.env 
});

// Forward exit code
child.on('close', (code) => {
  process.exit(code);
});

// Handle errors
child.on('error', (err) => {
  console.error('Failed to start server process:', err);
  process.exit(1);
});

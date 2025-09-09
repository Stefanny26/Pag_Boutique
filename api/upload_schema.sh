#!/bin/bash

# Script para subir el esquema SQL a la base de datos en Render
# Uso: ./upload_schema.sh <DATABASE_URL>

if [ -z "$1" ]; then
  echo "Error: Debes proporcionar la URL de la base de datos"
  echo "Uso: ./upload_schema.sh <DATABASE_URL>"
  exit 1
fi

DATABASE_URL=$1
echo "Subiendo esquema.sql a la base de datos..."
cat schema.sql | psql "$DATABASE_URL"

echo "¡Esquema subido correctamente!"

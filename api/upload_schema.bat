@echo off
REM Script para subir el esquema SQL a la base de datos en Render
REM Uso: upload_schema.bat <DATABASE_URL>

if "%~1"=="" (
  echo Error: Debes proporcionar la URL de la base de datos
  echo Uso: upload_schema.bat ^<DATABASE_URL^>
  exit /b 1
)

set DATABASE_URL=%~1
echo Subiendo schema.sql a la base de datos...
type schema.sql | psql "%DATABASE_URL%"

if %ERRORLEVEL% EQU 0 (
  echo ¡Esquema subido correctamente!
) else (
  echo Error al subir el esquema.
)

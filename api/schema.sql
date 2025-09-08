-- Tabla de pacas
CREATE TABLE pacas (
  id SERIAL PRIMARY KEY,
  nombre VARCHAR(100) NOT NULL,
  precio NUMERIC(10,2) NOT NULL,
  tipo VARCHAR(50),
  descripcion TEXT,
  prendas VARCHAR(50),
  imagen VARCHAR(255),
  marca VARCHAR(50),
  disponible BOOLEAN DEFAULT TRUE
);

-- Tabla de productos boutique
CREATE TABLE productos_boutique (
  id SERIAL PRIMARY KEY,
  nombre VARCHAR(100) NOT NULL,
  talla VARCHAR(20),
  precio NUMERIC(10,2) NOT NULL,
  tipo VARCHAR(50),
  imagen VARCHAR(255)
);

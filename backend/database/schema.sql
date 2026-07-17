CREATE TABLE IF NOT EXISTS users (

    id SERIAL PRIMARY KEY,

    name VARCHAR(100) NOT NULL,

    email VARCHAR(255) UNIQUE NOT NULL,

    password VARCHAR(255) NOT NULL,

    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP

);

CREATE TABLE IF NOT EXISTS products (

    id SERIAL PRIMARY KEY,

    name VARCHAR(255) NOT NULL,

    description TEXT,

    price DECIMAL(10,2) NOT NULL,

    image_url TEXT,

    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP

);

CREATE TABLE IF NOT EXISTS cart_items (

    id SERIAL PRIMARY KEY,

    user_id INTEGER REFERENCES users(id),

    product_id INTEGER REFERENCES products(id),

    quantity INTEGER DEFAULT 1

);

CREATE TABLE IF NOT EXISTS orders (

    id SERIAL PRIMARY KEY,

    user_id INTEGER REFERENCES users(id),

    total DECIMAL(10,2),

    status VARCHAR(30),

    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP

);

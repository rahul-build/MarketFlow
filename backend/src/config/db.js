import pkg from "pg";
import env from "./env.js";

const { Pool } = pkg;

const pool = new Pool({
  host: env.DB_HOST,
  port: env.DB_PORT,
  database: env.DB_NAME,
  user: env.DB_USER,
  password: env.DB_PASSWORD,
});

export async function connectDB() {
  try {
    const client = await pool.connect();

    console.log("✅ PostgreSQL Connected");

    client.release();
  } catch (error) {
    console.error("❌ PostgreSQL Connection Failed");
    console.error(error.message);

    process.exit(1);
  }
}

export default pool;

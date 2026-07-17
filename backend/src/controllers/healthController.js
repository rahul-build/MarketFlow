import pool from "../config/db.js";

export async function healthCheck(req, res) {
  try {
    await pool.query("SELECT NOW()");

    res.status(200).json({
      success: true,
      application: "MarketFlow Backend",
      database: "Connected",
      environment: process.env.NODE_ENV,
      timestamp: new Date().toISOString(),
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      application: "MarketFlow Backend",
      database: "Disconnected",
      error: error.message,
    });
  }
}

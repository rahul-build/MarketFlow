import app from "./app.js";
import env from "./config/env.js";
import { connectDB } from "./config/db.js";

const PORT = env.PORT;

async function startServer() {
  await connectDB();

  app.listen(PORT, () => {
    console.log(`🚀 Server running on port ${PORT}`);
  });
}

startServer();

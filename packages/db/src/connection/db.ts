import mongoose from "mongoose";

// be extra safe here for configs
import dotenv from "dotenv"

dotenv.config();
type ConnectionObject = {
  isConnected?: number;
  db?: any
};

const conn: ConnectionObject = {};

async function connectDB(): Promise<any> {
  if (conn.isConnected) return;

  try {
    const db = await mongoose.connect(process.env.MONGODB_URI as string);
    conn.isConnected = db.connections[0]?.readyState ?? 0;
    conn.db = db;
    console.log("DB connected successfully");
  } catch (error) {
    console.error("DB connection failed", error);
    process.exit(1);
  }
}

async function  getClientNative() {
  await connectDB();
  return conn.db.connection.db;
}
export { connectDB, getClientNative };

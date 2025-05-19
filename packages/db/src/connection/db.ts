// dbClient.ts
import mongoose from "mongoose";

type ConnectionObject = {
  isConnected?: number;
  client?: any;
};

const connection: ConnectionObject = {};

async function connectDB(): Promise<any> {
  if (connection.isConnected) {
    return connection.client;
  }

  try {
    const db = await mongoose.connect(process.env.MONGODB_URI as string);
    connection.isConnected = db.connections[0]?.readyState ?? 0;
    const client = mongoose.connection.getClient();
    connection.client = client;

    console.log("DB connected successfully");
    return client;
  } catch (error) {
    console.log("DB connection failed", error);
    process.exit(1);
  }
}

export { connectDB, connection };

import mongoose from "mongoose";
import { RoadmapModel, connectDB } from "@axonicles/db/dbClient"

export default async function Home() {
  let testDB;
  try {
    await connectDB();
    testDB = await RoadmapModel.find();
    console.log(testDB);
  } catch (error:any) {
    console.log("Failed to connect DB", error.message);
  }
  return (
    <div>
      {JSON.stringify(testDB)};
    </div>
  );
}

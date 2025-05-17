import { RoadmapModel, connectDB } from "@axonicles/db/dbClient"
import {roadmapQueue} from "@axonicles/queues/queues"

export default async function Home() {
  let testDB;
  try {
    await connectDB();
    await RoadmapModel.deleteMany();
    testDB = await RoadmapModel.find();
    const data = {
      userPrompt: "Roadmap for a cracked Devops Engineer",
      roadmapTitle: "Devops Engineer",
      roadmapDuration: 100,
      owner: "Kunal"
    }
    await roadmapQueue.add('roadmapBuilder', data);
    // console.log(testDB);
  } catch (error:any) {
    console.log("Failed to connect DB", error.message);
  }
 

  return (
    <div>
      {JSON.stringify(testDB)};
    </div>
  );
}

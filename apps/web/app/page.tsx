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
    // await roadmapQueue.add('roadmapBuilder', data);
  } catch (error:any) {
    console.log("Failed to connect DB", error.message);
  }
 

  return (
    <div className="bg-red-500">
      <p className="text-green-500">Lorem ipsum dolor sit, amet consectetur adipisicing elit. At enim aspernatur nesciunt quis quaerat nemo officiis deleniti veniam nobis. Sunt possimus voluptate dolor ad facilis porro laboriosam nostrum quisquam tempore?</p>
      {JSON.stringify(testDB)};
    </div>
  );
}

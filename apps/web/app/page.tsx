import { RoadmapModel, connectDB } from "@axonicles/db/dbClient"
import {roadmapQueue} from "@axonicles/queues/queues"

export default async function Home() {
  let testDB;
  try {
    await connectDB();
    testDB = await RoadmapModel.find();
    await roadmapQueue.add('roadmapBuilder', {
      title: "webdev",
      prompt: "Create a roadmap to become a fullstack web developer"
    })
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

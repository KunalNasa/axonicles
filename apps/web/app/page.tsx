import { RoadmapModel, connectDB } from "@axonicles/db/index"
import { Roadmap } from "@axonicles/types/index";
// import {roadmapQueue} from "@axonicles/queues/queues"
import "@axonicles/tailwind-config/styles.css"
import "@axonicles/ui/styles.css"
import { sampleRoadmap } from "@axonicles/lib/index";

export default async function Home() {
  let testDB;
  try {
    await connectDB();
    await RoadmapModel.deleteMany();
    testDB = await RoadmapModel.find();
    // const data = {
    //   userPrompt: "Roadmap for a cracked Devops Engineer",
    //   roadmapTitle: "Devops Engineer",
    //   roadmapDuration: 100,
    //   owner: "Kunal"
    // }
    // await roadmapQueue.add('roadmapBuilder', data);
  } catch (error:any) {
    console.log("Failed to connect DB", error.message);
  }

  const roadmap: Roadmap = sampleRoadmap;
 
  return (
    <div className="text-gray-100">
      {/* {JSON.stringify(roadmap)}; */}
      <h1>{roadmap.title}</h1>
      <br />
      {roadmap.tasks.map((task) => (
        <div key={task.title}>
          {task.title}
          <br />
          {task.duration}
          <br />
          {task.is_completed}
          <br />
          {task.subtopics.map((sub) => (
            <div key={sub.title}>
              {sub.title}
              <br />
              <hr />
              {sub.description}
            </div>
          ))}
        </div>
      ))}
      {/* {JSON.stringify(testDB)}; */}
    </div>
  );
}

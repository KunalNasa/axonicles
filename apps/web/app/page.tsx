
import { Roadmap } from "@axonicles/types/index";
import "@axonicles/tailwind-config/styles.css"
import "@axonicles/ui/styles.css"
import { sampleRoadmap } from "@axonicles/lib/sample";

export default async function Home() {

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

import { Roadmap } from "@axonicles/types/index";
import TasksList from "./TasksList";

export default function DisplayTasks({data}: {data: Roadmap}) {
  return (
    <div>
      <h2 className="text-xl font-semibold text-gray-200 mt-5 mb-2">Task List</h2>
        <TasksList data = {data}/>
    </div>
  );
}
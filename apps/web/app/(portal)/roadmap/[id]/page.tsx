'use client'
import { useParams } from "next/navigation";
import { QFetchRoadmapById } from "../../../../controllers/roadmaps/roadmap-api";
import UserRoadmapHeader from "../../../../components/roadmapcomponents/UserRoadmapHeader";
import { Roadmap } from "@axonicles/types/index";
import DisplayTasks from "../../../../components/roadmapcomponents/DisplayTasks";


export default function Page() {
  const params = useParams();
  const id = params.id as string;
  const {data, isLoading} = QFetchRoadmapById(id);
  if(isLoading){
    return <p>Loading....</p>
  }
  const roadmap:Roadmap = data.data;

  return (
    <div>
      <UserRoadmapHeader data={roadmap}/>
      <DisplayTasks data={roadmap} /> 
    </div>
  );
}

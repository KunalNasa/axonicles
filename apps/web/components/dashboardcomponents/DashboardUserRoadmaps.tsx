'use client'
import { QFetchUserRoadmaps } from "../../controllers/roadmaps/roadmap-api";
import RoadmapCards from "../roadmapcomponents/RoadmapCards";
import { Roadmap } from "@axonicles/types/index";

export default function DashboardUserRoadmaps() {
  const { data, error, isLoading } = QFetchUserRoadmaps();
  if (isLoading) {
    return <h1>Loading</h1>
  }
  if (error) {
    return <h1> Error </h1>
  }
  const roadmaps: Roadmap[] = data?.data;
  console.log(roadmaps);
  return (
    <div className="mb-3 w-full">
      <h2 className="font-semibold text-2xl text-gray-300 mb-2">Your Roadmaps</h2>
      {(!roadmaps || roadmaps.length === 0) ? (
        <p className="text-gray-400">No roadmaps found.</p>
      ) : (
        <div className="w-full flex flex-wrap gap-5 items-center justify-start mx-auto">
          {roadmaps.map((roadmap, index) => ( 
            <RoadmapCards
            key={`${roadmap._id}-${index}`}
            roadmap={roadmap}
            />
          ))}
        </div>
      )}
    </div>
  );
}

'use client'
import { useRoadmapsStore } from "../../store/Roadmaps.store";
import RoadmapCards from "../roadmapcomponents/RoadmapCards";

export default function DashboardUserRoadmaps() {
  const { roadmaps } = useRoadmapsStore();

  const duplicatedRoadmaps = Array(5).fill(roadmaps).flatMap((r) => r);

  return (
    <div className="my-3 w-full">
      <h2 className="font-semibold text-lg text-gray-300 mb-3">Your Roadmaps</h2>
      {duplicatedRoadmaps.map((roadmap, index) => (
        <RoadmapCards
          key={`${roadmap._id}-${index}`}
          roadmap={roadmap}
        />
      ))}
    </div>
  );
}
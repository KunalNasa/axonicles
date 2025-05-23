'use client'
import { useEffect } from "react";
import RoadmapCards from "../roadmapcomponents/RoadmapCards";
import { RoadmapsStore } from "../../store/Roadmaps.store";
import { Roadmap } from "@axonicles/types/types";

export default function DashboardUserRoadmaps() {
  const { roadmaps, setRoadmaps } = RoadmapsStore();
  // useEffect(() => {
  //   if (roadmaps.length === 0) {
  //     // simulate API call
  //     const apiRes: Roadmap[] = []; // Replace with actual fetch logic
  //     setRoadmaps(apiRes);
  //   }
  // }, [roadmaps, setRoadmaps]);

  return (
    <div className="my-3 w-full">
      <h2 className="font-semibold text-lg text-gray-300 mb-3">Your Roadmaps</h2>
      {roadmaps.length === 0 ? (
        <p className="text-gray-400">No roadmaps found.</p>
      ) : (
        roadmaps.map((roadmap, index) => (
          <RoadmapCards
            key={`${roadmap._id}-${index}`}
            roadmap={roadmap}
          />
        ))
      )}
    </div>
  );
}

'use client'

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { CurrentRoadmapStore } from "../../../../store/CurrentRoadmap.store";
import { RoadmapsStore } from "../../../../store/Roadmaps.store";
import { sampleRoadmap } from "@axonicles/lib/sample";

export default function Page() {
  const params = useParams();
  const id = params.id as string;

  const { roadmaps, setRoadmaps } = RoadmapsStore();
  const { roadmap, setRoadmap } = CurrentRoadmapStore();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const currentRoadmap = roadmaps.find((r) => r._id === id);

    if (currentRoadmap) {
      setRoadmap(currentRoadmap);
      setLoading(false);
    } else {
      // simulate fetching data
      setRoadmaps([sampleRoadmap]); // Ideally fetch via API
      const fetchedRoadmap = sampleRoadmap._id === id ? sampleRoadmap : null;
      if (fetchedRoadmap) {
        setRoadmap(fetchedRoadmap);
      }
      setLoading(false);
    }
  }, [id, roadmaps, setRoadmap, setRoadmaps]);

  if (loading) return <p>Loading...</p>;
  if (!roadmap) return <p>Roadmap not found</p>;

  return (
    <div>
      {roadmap._id}
    </div>
  );
}

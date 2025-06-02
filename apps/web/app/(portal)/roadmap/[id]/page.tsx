'use client'

import { useParams } from "next/navigation";
import { QFetchRoadmapById } from "../../../../controllers/roadmaps/roadmap-api";
import UserRoadmapHeader from "../../../../components/roadmapcomponents/UserRoadmapHeader";
import { Roadmap } from "@axonicles/types/index";
import DisplayTasks from "../../../../components/roadmapcomponents/DisplayTasks";
import { useMemo } from "react";

export default function Page() {
  const params = useParams();
  const id = params.id as string;
  const { data, isLoading } = QFetchRoadmapById(id);

  const roadmap: Roadmap | undefined = data?.data;

  const {
    subtopicsCount,
    completedSubtopics,
    subtopicsProgress,
  } = useMemo(() => {
    let subtopicsCount = 0;
    let completedSubtopics = 0;

    if (!roadmap) return { subtopicsCount: 0, completedSubtopics: 0, subtopicsProgress: 0 };

    roadmap.tasks.forEach((task) => {
      task.subtopics.forEach((sub) => {
        if (sub.status === "Done") {
          completedSubtopics++;
        }
        subtopicsCount++;
      });
    });

    const subtopicsProgress =
      subtopicsCount === 0 ? 0 : Math.floor(completedSubtopics*100 / subtopicsCount);

    return { subtopicsCount, completedSubtopics, subtopicsProgress };
  }, [roadmap]);

  if (isLoading || !roadmap) {
    return <p>Loading....</p>;
  }

  return (
    <div>
      <UserRoadmapHeader
        data={roadmap}
        subtopicsCount={subtopicsCount}
        subtopicsProgress={subtopicsProgress}
      />
      <DisplayTasks data={roadmap} />
    </div>
  );
}

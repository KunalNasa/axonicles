// RoadmapEnricher.ts
import { IEnricher, EnrichmentMeta } from "../types";
import { Roadmap } from "@axonicles/types/types";

export class RoadmapEnricher implements IEnricher<Roadmap> {

  enrich(data: any, meta: EnrichmentMeta): Roadmap {
    // console.log(data);
    const enriched : Roadmap = {
      title: meta.title,
      duration: meta.duration,
      progress: 0,
      generated_by: "Gemini",
      owner: meta.owner,
      superOwner: meta.owner,
      expectedDuration: meta.duration,
      tasks: data.map((task:any) => ({
        ...task,
        startDate : null,
        endDate: null,
        is_completed: false,
        subtopics: task.subtopics.map((sub:any) => ({
          ...sub,
          resources: "",
          description: "",
          status: "Pending",
        })),
      })),
    };
    
    return enriched;
  }
}

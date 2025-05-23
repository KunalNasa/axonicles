import { Roadmap } from "@axonicles/types/types";
import { create } from "zustand";

export interface RoadmapsStoreInterface {
    roadmaps: Roadmap[] | [],
    setRoadmaps: (roadmaps: Roadmap[]) => void
}

export const useRoadmapsStore = create<RoadmapsStoreInterface>((set) => ({
    roadmaps: [],
    setRoadmaps: (roadmaps) => set({ roadmaps: roadmaps })
}));

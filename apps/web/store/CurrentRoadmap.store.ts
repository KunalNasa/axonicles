import { Roadmap } from "@axonicles/types/types";
import { create } from "zustand";

export interface CurrentRoadmapStoreInterface {
    roadmap: Roadmap | null,
    setRoadmap: (roadmap: Roadmap | null) => void
}

export const CurrentRoadmapStore = create<CurrentRoadmapStoreInterface>((set) => ({
    roadmap: null,
    setRoadmap: (roadmap : Roadmap | null) => set({ roadmap: roadmap })
}));

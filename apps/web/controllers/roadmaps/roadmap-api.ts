import { useQuery } from "@tanstack/react-query";
import { fetchRoadmapById, fetchRoadmaps } from "./fetchFunctions";
import { queryKeys } from "./roadmap-keys";


export function QFetchUserRoadmaps() {
    const key = queryKeys.userRoadmaps;
    return useQuery({
      queryKey: key,
      queryFn: fetchRoadmaps,
      staleTime: Infinity,
    });
}

export function QFetchRoadmapById (id : string) {
    const key = queryKeys.roadmapById(id);
    return useQuery({
        queryKey: key,
        queryFn: () => fetchRoadmapById(id),
        staleTime: Infinity
    })
}
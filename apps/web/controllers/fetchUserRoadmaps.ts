import { useQuery } from "@tanstack/react-query";
import { getBaseURL } from "../lib/auth/fetchBaseURL"

export async function fetchRoadmaps() {
    const BASE_URL = getBaseURL();
    console.log("Base URL",BASE_URL);
    const res = await fetch(`${BASE_URL}/user/all-roadmaps`, {
        method: "GET",
        credentials: "include",
    });
    if (!res.ok) {
        throw new Error("Failed to fetch request logs");
    }
    return res.json();
}

export function QFetchUserRoadmaps() {
    return useQuery({
      queryKey: ['requestLogs'],
      queryFn: fetchRoadmaps,
      staleTime: Infinity,
    });
}
  
'use client'

import { useEffect} from "react";
import { useParams } from "next/navigation";
import { getBaseURL } from "../../../../lib/auth/fetchBaseURL";



export default function Page() {
  const params = useParams();
  const base = getBaseURL();

  async function fetchRoadmaps(){
    const BASE_URL = getBaseURL();
    console.log("Base URL",BASE_URL);
    const res = await fetch(`${BASE_URL}/user/roadmap/${id}`, {
        method: "GET",
        credentials: "include",
    });
    if (!res.ok) {
        throw new Error("Failed to fetch request logs");
    }
    return res.json();
}
  useEffect(() => {
    fetchRoadmaps()
  }, []);
  const id = params.id as string;

  return (
    <div>
      {id}
    </div>
  );
}

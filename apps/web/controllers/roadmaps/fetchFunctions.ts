// place to fetch all axios get points for roadmaps
import { axios } from "../../lib/globalAxios";

export async function fetchRoadmaps() {
    const res = await axios.get(`/user/all-roadmaps`);
    if (res.status < 200 || res.status >= 300) {
        throw new Error("Failed to fetch request logs");
    }
    return res.data;
}


export async function fetchRoadmapById(id : string){
    const res = await axios.get(`/user/roadmap/${id}`);
    if (res.status < 200 || res.status >= 300) {
        throw new Error("Failed to fetch request logs");
    }
    return res.data;
}
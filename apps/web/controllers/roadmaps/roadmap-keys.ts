export const queryKeys = {
    userRoadmaps: ['userRoadmaps'] as const,
    // we can set obj values as function in JS.
    roadmapById: (id: string) => ['roadmapById', id] as const,
};
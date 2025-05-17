import { RoadmapEnricher } from "../lib/DataTransformer/RoadmapEnricher";

describe("Roadmap enricher must fill all the required details to roadmap structure", () => {
    it("Must enrich structure with required fields", () => {
        const sampleInputStructure = [
            {
              title: "Task title here",
              duration: 5,
              subtopics: [
                {
                  title: "Subtopic title here",
                  duration: 2,
                  prerequisites: ["html", "css", "js"]
                }
              ]
            }
        ]
        const metaObject = {
            duration : 10,
            owner: "1234e56s",
            title: "Web developer",
        }

        const expectedResult = {
            title : "Web developer",
            duration: 10,
            progress: 0,
            generated_by: "Gemini",
            owner: "1234e56s",
            superOwner: "1234e56s",
            expectedDuration: 10,
            tasks: [
                {
                    title: "Task title here",
                    duration: 5,
                    startDate : null,
                    endDate: null,
                    is_completed: false,
                    subtopics : [
                        {
                            resources: "",
                            description: "",
                            status: "Pending",
                            title: "Subtopic title here",
                            duration: 2,
                            prerequisites: ["html", "css", "js"]
                        }
                    ]
                }
            ]

        }
        const enricher = new RoadmapEnricher();
        const enrichedData = enricher.enrich(sampleInputStructure, metaObject);
        expect(enrichedData).toEqual(expectedResult);
    })
})
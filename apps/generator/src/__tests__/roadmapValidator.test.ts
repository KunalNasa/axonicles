import { RoadmapValidator } from "../lib/DataTransformer/RoadmapValidator";


describe("Test the functionality of roadmap validator", () => {
    const validator = new RoadmapValidator;
    it("Must return true after parsing result", () => {
        const sample = [
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
        ];
        const result = validator.validate(sample);

        expect(result).toBe(true);
    })

    it('Test with one missing field in subtopics', () => {
        const sample = [
            {
              title: "Task title here",
              duration: 5,
              subtopics: [
                {
                  title: "Subtopic title here",
                  prerequisites: ["html", "css", "js"]
                }
              ]
            }
        ]
        const result = validator.validate(sample);
        expect(result).toBe(false);
    })

    it('Test when there is no subtopics field in tasks', () => {
        const sample = [
            {
              title: "Task title here",
              duration: 5
            }
        ]
        const result = validator.validate(sample);
        expect(result).toBe(false);
    })
    
})
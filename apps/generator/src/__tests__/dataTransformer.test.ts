import { DataTransformer } from "../lib/DataTransformer/DataTransformer";
import { JsonParser } from "../lib/DataTransformer/JsonParser";
import { RoadmapValidator } from "../lib/DataTransformer/RoadmapValidator";
import { RoadmapEnricher } from "../lib/DataTransformer/RoadmapEnricher";
import { EnrichmentMeta } from "../lib/types";

describe("DataTransformer Integration Test", () => {
  const transformer = new DataTransformer(
    new JsonParser(),
    new RoadmapValidator(),
    new RoadmapEnricher()
  );

  const rawInput = '```json\n' + JSON.stringify([
    {
      title: "Learn Linux",
      duration: 5,
      subtopics: [
        {
          title: "Linux Basics",
          duration: 2,
          prerequisites: ["None"]
        }
      ]
    }
  ]) + '\n```';

  const meta: EnrichmentMeta = {
    title: "Linux Roadmap",
    duration: 10,
    owner: "abc123"
  };

  it("should parse, validate, and enrich the roadmap", () => {
    const result = transformer.transform(rawInput, meta);

    expect(result).toEqual({
      title: "Linux Roadmap",
      duration: 10,
      expectedDuration: 10,
      generated_by: "Gemini",
      owner: "abc123",
      superOwner: "abc123",
      progress: 0,
      tasks: [
        {
          title: "Learn Linux",
          duration: 5,
          startDate: null,
          endDate: null,
          is_completed: false,
          subtopics: [
            {
              title: "Linux Basics",
              duration: 2,
              prerequisites: ["None"],
              description: "",
              resources: "",
              status: "Pending"
            }
          ]
        }
      ]
    });
  });

  it("should return null on invalid structure", () => {
    const invalidRaw = '```json\n' + JSON.stringify([
      {
        title: "Invalid Task", // missing subtopics
        duration: 3
      }
    ]) + '\n```';

    const result = transformer.transform(invalidRaw, meta);
    expect(result).toBeNull();
  });
});

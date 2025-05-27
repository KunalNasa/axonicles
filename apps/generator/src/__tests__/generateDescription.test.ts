// review required for this file
import { gemini } from "@axonicles/lib/geminiConnection";
import { subtopicDescriptionSchema } from "@axonicles/zod-schemas/index";
import { PromptConstruct } from "../lib/promptConstructor";
import { JsonParser } from "../lib/DataTransformer/JsonParser";
import { Generator } from "../lib/Generator";

jest.mock("@axonicles/lib/lib", () => ({
  gemini: jest.fn(),
}));

jest.mock("../lib/generatorLogger", () => ({
    logger: {
        getSubLogger: jest.fn().mockReturnValue({
          info: jest.fn(),
          error: jest.fn(),
          warn: jest.fn(),
        }),
      },
}))


jest.mock("../lib/promptConstructor", () => ({
  PromptConstruct: jest.fn()
}));

jest.mock("../lib/DataTransformer/JsonParser", () => ({
  JsonParser: jest.fn()
}));

jest.mock("@axonicles/zod-schemas/zodSchemas", () => ({
  subtopicDescriptionSchema: {
    safeParse: jest.fn()
  }
}));

describe("generateDescriptions", () => {
  it("should generate subtopic descriptions into a map", async () => {
    const roadmap = {
      title: "Web Dev",
      duration: 10,
      progress: 0,
      generated_by: "Gemini",
      owner: "owner1",
      superOwner: "owner1",
      expectedDuration: 10,
      tasks: Array.from({ length: 4 }, (_, i) => ({
        _id: `task-${i + 1}`,
        title: `Task ${i + 1}`,
        duration: 2,
        is_completed: false,
        startDate: null,
        endDate: null,
        subtopics: [
          {
            title: `Subtopic ${i + 1}`,
            duration: 1,
            prerequisites: [],
            description: "",
            resources: "",
            status: "Pending"
          }
        ]
      }))
    };

    // Mock PromptConstruct
    const mockPromptFn = jest.fn().mockReturnValue("Prompt");
    (PromptConstruct as jest.Mock).mockImplementation(() => ({
      constructSubtopicDescriptionPrompt: mockPromptFn
    }));

    // Mock JsonParser
    (JsonParser as jest.Mock).mockImplementation(() => ({
      parse: jest.fn().mockImplementation((res) => JSON.parse(res))
    }));

    // Mock Gemini responses for 4 batches
    (gemini as jest.Mock)
      .mockResolvedValueOnce(JSON.stringify({ "Subtopic 1": "Desc 1" }))
      .mockResolvedValueOnce(JSON.stringify({ "Subtopic 2": "Desc 2" }))
      .mockResolvedValueOnce(JSON.stringify({ "Subtopic 3": "Desc 3" }))
      .mockResolvedValueOnce(JSON.stringify({ "Subtopic 4": "Desc 4" }));

    // Mock Zod schema validation
    (subtopicDescriptionSchema.safeParse as jest.Mock).mockReturnValue({ success: true });

    const instance = new Generator();
    const result = await instance.generateDescriptions(roadmap as any);

    expect(result).toBeInstanceOf(Map);
    expect(result.size).toBe(4);
    expect(result.get("Subtopic 1")).toBe("Desc 1");
    expect(result.get("Subtopic 2")).toBe("Desc 2");
    expect(result.get("Subtopic 3")).toBe("Desc 3");
    expect(result.get("Subtopic 4")).toBe("Desc 4");

    expect(gemini).toHaveBeenCalledTimes(4);
    expect(mockPromptFn).toHaveBeenCalledTimes(4);
  });
});

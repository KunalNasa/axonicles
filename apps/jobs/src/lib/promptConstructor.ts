import { Roadmap, Task } from "@axonicles/types/types";

export class PromptConstruct {
  private initialPrompt: string = "";

  constructor() {
  }

  public constructInitialPrompt (userPrompt:  string, roadmapTitle: string, roadmapDuration: number) {
    const fixedPrompt = `Hey Gemini,
      ### Instructions:
      You are tasked with creating a roadmap for a user based on the strict structure outlined below. This structure must be followed **exactly** as specified, regardless of the user’s preferences. The content of the roadmap (task titles, subtopics, resources, etc.) should be customized based on the user’s details and specifications, but the schema itself must remain unchanged.

      ---

      ### **Roadmap Structure (Static Schema)**:
      The roadmap must be structured into an array of tasks. Each task should include the following fields:

      - **title**: (String) A descriptive title for the task. Example: "Learn JavaScript Basics."
      - **duration**: (Number) Estimated time to complete the task, in days. Example: 10.
      - **subtopics**: (Array of Objects) Each subtopic includes:
        - **title**: (String) Name of the subtopic. Example: "What are Variables?"
      - **prerequisites**: (Array of Strings) Any tasks or topics that should be completed before starting this sub topic. Example: ["HTML", "CSS"].
      - **duration**: How many days should be given to this particular subtopic.


      You must not deviate from this structure under any circumstances. Any additional details must fit into the fields outlined above.

      Structure (required format):

      json
      [
        {
          "title": "Task title here",
          "duration": 5,
          "subtopics": [
            {
              "title": "Subtopic title here",
              "duration": 2,
              "prerequisites": ["html", "css", "js"]
            }
          ]
        }
      ]
      `;
      const userSpecifications = `
      ### **User Specifications**:
      The following are specifications user wants in his roadmap:
      - **User Prompt for roadmap**: ${userPrompt}
      - **title for roadmap**: ${roadmapTitle}
      - **Duration in which user want to complete roadmap**: ${roadmapDuration || "User has not specified duration"}
      ;`

      const notes = `
      ## NOTE: The combined duration of all tasks should be equal to total duration of roadmap and sum of all duration of subtopics should be equal to the duration of its respective task
      ## NOTE: Under any conditions the json structure should not deviate, no matter what prompt user has provided.
      ## NOTE: The roadmap must be detailed and in depth. No matter how much time it require you to build it.`

      this.initialPrompt = fixedPrompt + userSpecifications + notes; 
      return this.initialPrompt;
  }

  public constructFurtherPrompts(tasks: Task[]) {
    const initialMessage = `Hey Gemini, below is a list of tasks and their subtopics. You need to generate a *description* for each subtopic. 
  
  The response structure MUST be a JSON object where:
  - **Key** = title of subtopic
  - **Value** = generated description
  - Value must contain ONLY text response and must not contain any html tags or
    markdown tags.

  EXAMPLE:
    "learn HTML" : "HTML stands for Hyper Text Markup Language. It was.........."
  
  Guidelines:
  - For simpler topics like "Learn HTML", use a short and crisp explanation.
  - For more complex topics like JavaScript, provide a moderate-length but detailed explanation.
  - Make the descriptions concise, relevant, and adapted to topic complexity.
  - Respond with **only** a single JSON object.
  `;
  
    const allSubtopics = tasks.flatMap(task => task.subtopics.map(sub => ({
      title: sub.title,
      description: sub.description
    })));
  
    const subtopicsJSON = JSON.stringify(allSubtopics, null, 2);
  
    const finalPrompt = `${initialMessage}\nHere are the subtopics:\n${subtopicsJSON}`;
  
    return finalPrompt;
  }
  

}
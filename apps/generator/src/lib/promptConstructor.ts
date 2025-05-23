import { Task } from "@axonicles/types/index";
import { FIXED_ROADMAP_PROMPT, INITIAL_MESSAGE, NOTES_FOR_STRUCTURE } from "./config";

export class PromptConstruct {
  constructor() {
  }

  public constructInitialPrompt (userPrompt:  string, roadmapTitle: string, roadmapDuration: number) {
      const userSpecifications = `
      ### **User Specifications**:
      The following are specifications user wants in his roadmap:
      - **User Prompt for roadmap**: ${userPrompt}
      - **title for roadmap**: ${roadmapTitle}
      - **Duration in which user want to complete roadmap**: ${roadmapDuration || "User has not specified duration"}
      ;`

      const initialPrompt = FIXED_ROADMAP_PROMPT + userSpecifications + NOTES_FOR_STRUCTURE; 
      return initialPrompt;
  }

  public constructSubtopicDescriptionPrompt(tasks: Task[]) {
  
    const allSubtopics = tasks.flatMap(task => task.subtopics.map(sub => ({
      title: sub.title,
      description: sub.description
    })));
  
    const subtopicsJSON = JSON.stringify(allSubtopics, null, 2);
  
    const finalPrompt = `${INITIAL_MESSAGE}\nHere are the subtopics:\n${subtopicsJSON}`;
  
    return finalPrompt;
  }
  

}
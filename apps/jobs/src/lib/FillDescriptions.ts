import { gemini } from "@axonicles/lib/lib";
import { PromptConstruct } from "./promptConstructor";
import { JsonParser } from "./DataTransformer/JsonParser";


// change type to roadmap after testing
export async function fillDescriptions(roadmap : any) {
    const totalTasks = roadmap.tasks.length;
    // console.log(totalTasks);
    const iterationSize = Math.floor(totalTasks/4);
    let PendingTasks = Math.floor(totalTasks%4);
    let finalDescriptionMap : Map<string, string> = new Map();

    let currentReq = 0;
    while(currentReq < totalTasks){
      const tasks:any = [];
      let loopSize = 0;
      if(PendingTasks > 0){
        loopSize = iterationSize + 1;
        PendingTasks--;
      }else{
        loopSize = iterationSize;
      }
      let start = currentReq, end = currentReq + loopSize;
      currentReq += loopSize;
      while(start < end){
        tasks.push(roadmap.tasks[start]);
        start++;
      }
      const constructMyPrompt = new PromptConstruct()
      const myPrompt = constructMyPrompt.constructFurtherPrompts(tasks);
      const geminiResponse = await gemini(myPrompt);

      const parser = new JsonParser;
      const parsedResponse = parser.parse(geminiResponse);
      for (const [key, value] of Object.entries(parsedResponse)) {
        finalDescriptionMap.set(key, value as string);
      }
    }

    return finalDescriptionMap;
}
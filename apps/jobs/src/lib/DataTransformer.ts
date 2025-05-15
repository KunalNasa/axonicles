// import { RoadmapSchema } from "@axonicles/zod-schemas/zodSchemas";
// import { ZodError } from "zod";

// export class DataTransformer  {
//     private initialResponse:string;
//     private finalRoadmapObject: any = {};
//     private title : string = "";
//     private duration : number = 0;
//     private owner : string = "";


//     constructor(initialResponse : string) {
//         this.initialResponse = initialResponse;
//     }

//     public cleanResponseAndParseIt () {
//         try {
//             const cleanedData = this.initialResponse.replace(/```json\s*/g, "") // Remove Markdown-style prefix
//             .replace(/```/g, "") // Remove trailing ```
//             .replace(/\n/g, "") // Remove newlines
//             .replace(/\\\"/g, '"') // Fix escaped quotes
//             .trim();
//             const parsedData = JSON.parse(cleanedData);
//             this.finalRoadmapObject.tasks = parsedData;
//             return parsedData;

//         } catch (error : any) {
//             console.log(error);
//         }
//     }

//     public validateInitialResponse () : Boolean {
//         try {
//             const validateObject = RoadmapSchema.safeParse(this.finalRoadmapObject);
//             if(validateObject.error) {
//                 throw new ZodError(validateObject.error.errors);
//             }
//             return true;
//         } catch (error : any) {
//             console.log(ZodError);
//             return false;
//         }
//     }

//     public populateInitialResponse () {
//         this.finalRoadmapObject.title = this.title;
//         this.finalRoadmapObject.duration = this.duration;
//         this.finalRoadmapObject.progress = 0;
//         this.finalRoadmapObject.generated_by = "Gemini";
//         this.finalRoadmapObject.owner = this.owner;
//         this.finalRoadmapObject.superOwner = this.owner;
//         this.finalRoadmapObject.expectedDuration = this.duration;

//         this.finalRoadmapObject.tasks.map((task : any) => {
//             task.is_completed = false;
//             task.startDate = "";
//             task.endDate = "";
//             task.subtopics.map((subtopic : any) => {
//                 subtopic.resources = "";
//                 subtopic.description = "";
//                 subtopic.status = "pending"
//             })
//         })
//         console.log(this.finalRoadmapObject);
//         return this.finalRoadmapObject;
//     }

//     public orchestrator (title : string, owner : string, duration : number) {
//         try {
//             this.owner = owner;
//             this.duration = duration;
//             this.title = title;
//             this.cleanResponseAndParseIt();
//             if(!this.validateInitialResponse()) {
//                 throw new Error("Error while validating response")
//             }
//             const finalObject = this.populateInitialResponse();
//             return finalObject;
//         } catch (error : any) {
//             console.log("Error", error);
//         }
//     }

// }

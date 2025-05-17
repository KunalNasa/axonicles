// JsonParser.ts
import { IParser } from "../types"
export class JsonParser implements IParser {
    
  parse(raw: string): any {
    const cleaned = raw
      .replace(/```json\s*/g, "")
      .replace(/```/g, "")
      .replace(/\n/g, "")
      .replace(/\\\"/g, '"')
      .trim();

    return JSON.parse(cleaned);
  }
}

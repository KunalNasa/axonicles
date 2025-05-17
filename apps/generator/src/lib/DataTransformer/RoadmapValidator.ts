// RoadmapValidator.ts
import { RoadmapSchema } from "@axonicles/zod-schemas/zodSchemas";

import type { z } from "zod";
import { IValidator } from "../types";
import { generatorLogger } from "../generatorLogger";

export type RoadmapType = z.infer<typeof RoadmapSchema>;

export class RoadmapValidator implements IValidator<RoadmapType> {
    
  validate(data: any): data is RoadmapType {
    const result = RoadmapSchema.safeParse(data);
    if (!result.success) {
      generatorLogger.error("Validation Error:", result.error.format());
      return false;
    }
    generatorLogger.info("Initial roadmap structure parsed successfully");
    return true;
  }
}

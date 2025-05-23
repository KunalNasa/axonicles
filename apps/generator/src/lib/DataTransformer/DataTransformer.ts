// DataTransformer.ts
import { Roadmap } from "@axonicles/types/index";
import { IParser, IValidator, IEnricher, EnrichmentMeta } from "../types";
import { RoadmapType } from "./RoadmapValidator";


export class DataTransformer {
  constructor(
    private parser: IParser,
    private validator: IValidator<RoadmapType>,
    private enricher: IEnricher<Roadmap>
  ) {}

  public transform(raw: string, meta: EnrichmentMeta): Roadmap | null {
    try {
      const parsed = this.parser.parse(raw);

      if (!this.validator.validate(parsed)) {
        throw new Error("Validation failed");
      }

      const enriched = this.enricher.enrich(parsed, meta);
      return enriched;
    } catch (err) {
      console.error("Transformation failed:", err);
      return null;
    }
  }
}

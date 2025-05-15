// types.ts
export interface IParser {
    parse(raw: string): any;
  }
  
  export interface IValidator<T> {
    validate(data: T): boolean;
  }
  
  export interface IEnricher<T> {
    enrich(data: T, meta: EnrichmentMeta) : any;
  }
  
  export interface EnrichmentMeta {
    title: string;
    duration: number;
    owner: string;
  }
  
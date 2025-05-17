import { JsonParser } from "../lib/DataTransformer/JsonParser";

describe('Test the parser to remove extra characters from gemini response', () => {
    it('should parse the gemini response to correct json object', () => {
        const sampleString = '```json[{"title": "Linux Fundamentals"}]```'

        const parser = new JsonParser;
        const parsed = parser.parse(sampleString);

        const expected = [{"title":"Linux Fundamentals"}]
        expect(parsed).toEqual(expected);
    })
    
})

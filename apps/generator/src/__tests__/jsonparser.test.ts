import { JsonParser } from "../lib/DataTransformer/JsonParser";

describe('Test the parser to remove extra characters from gemini response', () => {
    test('should parse the gemini response to correct json object', () => {
        const sampleString = '```json[{"title": "Linux Fundamentals"}]```'

        const parser = new JsonParser;
        const parsed = parser.parse(sampleString);
        console.log('Parse string',parsed);

        const expected = [{"title":"Linux Fundamentals"}]
        expect(parsed).toEqual(expected);
    })
    
})

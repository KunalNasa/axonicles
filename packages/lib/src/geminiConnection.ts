import { GoogleGenAI } from "@google/genai";
// import dotenv from "dotenv"

// dotenv.config();

// const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
const ai = new GoogleGenAI({ apiKey: "123456" });


export async function gemini(contents: string) : Promise<string> {
  const response = await ai.models.generateContent({
    model: "gemini-2.0-flash",
    contents: contents,
  });
  return response.text || "";
}

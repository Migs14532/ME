import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({
  apiKey: "AIzaSyBq5xvhKqOrnyqmBFUErG8dCAjJCeSJiL8",
});

export async function generateQuiz(topic) {
  const prompt = `
  Generate a JSON quiz about "${topic}" with this exact structure:
  {
    "title": "string",
    "questions": [
      {
        "question": "string",
        "options": ["A", "B", "C", "D"],
        "answer": "string"
      }
    ]
  }
  Respond with raw JSON only — no markdown, code blocks, or explanations.
  `;

  const response = await ai.models.generateContent({
    model: "gemini-2.0-flash",
    contents: prompt,
  });

  let text = response.text;

  text = text
    .replace(/```json/i, "")
    .replace(/```/g, "")
    .trim();

  try {
    return JSON.parse(text);
  } catch (err) {
    console.error("Error parsing Gemini JSON:", text);
    throw new Error("Invalid JSON from Gemini");
  }
}

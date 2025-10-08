import { useState } from "react";
import { generateQuiz } from "../lib/ai";

export default function QuizForm({ setQuiz }) {
  const [topic, setTopic] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    if (!topic.trim()) return;
    setLoading(true);
    const quizData = await generateQuiz(topic);
    setQuiz(quizData);
    setLoading(false);
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full max-w-md bg-white p-6 rounded-2xl shadow-lg"
    >
      <label className="block text-lg font-medium mb-2">Enter a topic:</label>
      <input
        type="text"
        value={topic}
        onChange={(e) => setTopic(e.target.value)}
        placeholder="e.g. Space, ReactJS, World History"
        className="w-full border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4"
      />
      <button
        type="submit"
        className="w-full bg-blue-500 text-white font-semibold py-2 rounded-lg hover:bg-blue-600 transition"
        disabled={loading}
      >
        {loading ? "Generating..." : "Generate Quiz"}
      </button>
    </form>
  );
}

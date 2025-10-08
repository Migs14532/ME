import { useState } from "react";
import QuizForm from "./components/QuizForm";
import QuizDisplay from "./components/QuizDisplay";

export default function App() {
  const [quiz, setQuiz] = useState(null);

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-6">
      <h1 className="text-3xl font-bold mb-6 text-blue-600">
        🤖 AI Quiz Generator
      </h1>
      <QuizForm setQuiz={setQuiz} />
      {quiz && <QuizDisplay quiz={quiz} />}
    </div>
  );
}

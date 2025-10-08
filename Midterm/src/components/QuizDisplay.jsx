export default function QuizDisplay({ quiz }) {
  if (!quiz || !quiz.questions) return null;

  return (
    <div className="mt-8 w-full max-w-2xl bg-white p-6 rounded-2xl shadow-lg">
      <h2 className="text-2xl font-bold text-center mb-4 text-gray-800">
        {quiz.topic} Quiz
      </h2>
      <div className="space-y-6">
        {quiz.questions.map((q, i) => (
          <div key={i} className="p-4 border rounded-lg bg-gray-50">
            <h3 className="font-semibold mb-2">
              {i + 1}. {q.question}
            </h3>
            <ul className="space-y-1">
              {q.options.map((opt, j) => (
                <li key={j} className="pl-4">
                  <span className="font-medium">
                    {String.fromCharCode(65 + j)}.
                  </span>{" "}
                  {opt}
                </li>
              ))}
            </ul>
            <p className="mt-2 text-green-600 font-semibold">
              ✅ Correct answer: {q.answer}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

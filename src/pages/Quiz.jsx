import React, { useState, useEffect } from 'react'
import { useNavigate, Link } from 'react-router-dom'

const questions = [
  { question: "What is React?", options: ["Library", "Framework", "Language", "Database"], answer: "Library" },
  { question: "Who developed React?", options: ["Google", "Facebook", "Microsoft", "Amazon"], answer: "Facebook" },
  { question: "Which hook is used for state?", options: ["useEffect", "useState", "useRef", "useMemo"], answer: "useState" },
  { question: "What is JSX?", options: ["JavaScript XML", "Java Syntax", "JSON XML", "JS Extension"], answer: "JavaScript XML" },
  { question: "Which hook is used for side effects?", options: ["useState", "useEffect", "useContext", "useReducer"], answer: "useEffect" },
  { question: "What is a component?", options: ["Reusable UI", "Database", "API", "Server"], answer: "Reusable UI" },
  { question: "Default React port?", options: ["3000", "8080", "5000", "4200"], answer: "3000" },
  { question: "Render method?", options: ["ReactDOM.render()", "renderDOM()", "React.render()", "DOM.render()"], answer: "ReactDOM.render()" },
  { question: "Props are?", options: ["Function", "State", "Arguments", "Hook"], answer: "Arguments" },
  { question: "Lifecycle hook?", options: ["useEffect", "useState", "useRef", "useCallback"], answer: "useEffect" },
];

const Quiz = ({ setScore, user }) => {

  const [questionIdx, setQuestionIdx] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate("/Home");
    }
  }, [user, navigate]);

  const handleAnswer = (option) => {
    if (option === questions[questionIdx].answer) {
      setScore((prev) => prev + 1);
    }

    if (questionIdx < questions.length - 1) {
      setQuestionIdx((prev) => prev + 1);
    } else {
      navigate("/Result");
    }
  };

  return (
    <div className="space-y-6 text-center">

      <h2 className="text-lg font-semibold">
        Question {questionIdx + 1} / {questions.length}
      </h2>

      <h1 className="text-xl font-bold">
        {questions[questionIdx].question}
      </h1>

      <div className="grid gap-3">
        {questions[questionIdx].options.map((opt, idx) => (
          <button
            key={idx}
            onClick={() => handleAnswer(opt)}
            className="w-full bg-purple-500 text-white py-2 rounded-lg hover:bg-purple-600 transition"
          >
            {opt}
          </button>
        ))}
      </div>

      <Link to="/Home">
        <button className="mt-4 text-sm text-blue-500 underline">
          Back to Home
        </button>
      </Link>

    </div>
  )
}

export default Quiz
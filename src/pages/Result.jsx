import React, { useEffect } from 'react'
import { useNavigate, Link } from 'react-router-dom'

const Result = ({ user, score }) => {

  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate("/Home");
    }
  }, [user, navigate]);

  return (
    <div className="text-center space-y-6">

      <h1 className="text-2xl font-bold text-green-600">
        Quiz Completed 🎉
      </h1>

      <h2 className="text-lg">
        Hello <span className="uppercase font-semibold">{user}</span>
      </h2>

      <p className="text-xl font-bold">
        Your Score: {score}
      </p>

      <Link to="/Home">
        <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
          Play Again
        </button>
      </Link>

    </div>
  )
}

export default Result
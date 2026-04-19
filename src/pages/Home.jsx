import React from 'react'
import { useNavigate } from 'react-router-dom'

const Home = ({ user, setUser }) => {

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (user.trim() !== "") {
      navigate("/Quiz");
    }
  };

  return (
    <div className="text-center space-y-6">
      <h1 className="text-3xl font-bold text-blue-600">
        Quiz App
      </h1>

      <form onSubmit={handleSubmit} className="space-y-4">

        <input
          type="text"
          placeholder="Enter your name"
          value={user}
          onChange={(e) => setUser(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        <button
          type="submit"
          disabled={user.trim().length === 0}
          className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition disabled:bg-gray-400"
        >
          Start Quiz
        </button>

      </form>
    </div>
  )
}

export default Home
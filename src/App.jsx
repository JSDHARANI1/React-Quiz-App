import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import React, { useState } from "react"
import Home from './pages/Home'
import Quiz from './pages/Quiz'
import Result from "./pages/Result"

const App = () => {

  const [user, setUser] = useState("");
  const [score, setScore] = useState(0);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-purple-200 flex items-center justify-center">
      <BrowserRouter>
        <div className="bg-white shadow-xl rounded-2xl p-6 w-[400px]">
          <Routes>
            <Route path="/Home" element={<Home user={user} setUser={setUser} />} />
            <Route path="/Quiz" element={<Quiz setScore={setScore} user={user} />} />
            <Route path="/Result" element={<Result user={user} score={score} />} />
            <Route path="*" element={<Navigate to="/Home" />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  )
}

export default App
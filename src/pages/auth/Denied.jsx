import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

function Denied() {
    const navigate = useNavigate(); // Used to programatically navigate to the previous page
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 text-center p-4">
      <h1 className="text-5xl font-bold text-red-600 mb-4">403</h1>
      <p className="text-xl text-gray-700 mb-6">Access Denied!</p>
      <button
        onClick={() => navigate(-1)}
        className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition cursor-pointer"
      >
        Go to Home
      </button>
    </div>
  )
}

export default Denied

import React from 'react'

function App() {
  return (
    <div className="h-screen bg-gray-200flex justify-center items-center ">

      <div className="bg-white p-10 rounded-2xl ">

        <div className="text-center">
          <div className="flex gap-13">
          <div className="mb-4 ">
            <h1 className="font-bold">Day</h1>
            <input
              type="text"
              placeholder="DD"
              className="w-full h-10 text-center rounded-md border-2 border-gray-400"
            />
          </div>

          <div className="mb-4">
            <h1 className="font-bold">Months</h1>
            <input
              type="text"
              placeholder="MM"
              className="w-full h-10 text-center rounded-md border-2 border-gray-400"
            />
          </div>

          <div className="mb-4">
            <h1 className="font-bold">Years</h1>
            <input
              type="text"
              placeholder="YYYY"
              className="w-full h-10 text-center rounded-md border-2 border-gray-400"
            />
          </div>
          </div>

          <hr className="my-6" />

          <h2 className="font-bold text-4xl">
            <span className="text-purple-800">--</span> Years
          </h2>

          <h2 className="font-bold text-4xl">
            <span className="text-purple-800">--</span> Months
          </h2>

          <h2 className="font-bold text-4xl">
            <span className="text-purple-800">--</span> Days
          </h2>

        </div>

      </div>

    </div>
  )
}

export default App
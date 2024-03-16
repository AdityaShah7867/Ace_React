import React from 'react';

export default function HomeScreen() {
  const navigateToBusSchedule = () => {
    // Navigate to bus schedule screen
  };

  const navigateToMRTSchedule = () => {
    // Navigate to MRT schedule screen
  };

  return (
    <div className=" min-h-screen bg-gray-100">
      <div className=" mx-4 flex flex-col justify-between h-full">
        <br/><br/>
        <div className="bg-blue-600 rounded-lg py-8 px-4 mb-10">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-white text-4xl font-bold">Hello,</h1>
              <h1 className="text-white text-4xl font-bold">John Doe</h1>
            </div>
            <div className="bg-white rounded-full h-16 w-16"></div>
          </div>
          <p className="text-white mt-4">Share Your Experience</p>
          <div className="bg-white rounded-lg mt-4 flex items-center">
            <input type="text" className="w-full py-2 px-4 bg-transparent placeholder-gray-400 focus:outline-none" placeholder="Search" />
          </div>
        </div>
        <div className="bg-white rounded-t-3xl p-4 border-2">
          <div className="flex justify-between border-2 rounded-md border-gray-300 p-3">
            <div className="text-center">
              <p className="font-bold text-lg mb-2">Balance</p>
              <p className="font-bold text-xl">$ 18</p>
            </div>
            <div className="text-center">
              <p className="font-bold text-lg mb-2">Rewards</p>
              <p className="font-bold text-xl">$ 10.25</p>
            </div>
            <div className="text-center">
              <p className="font-bold text-lg mb-2">Total Trips</p>
              <p className="font-bold text-xl">189</p>
            </div>
          </div>
          <p className="font-bold text-lg mt-8 mb-4">Choose your Option!</p>
          <div className="flex flex-col justify-center items-center mb-4 gap-8">
            <div className="bg-blue-500 rounded-lg p-6 w-full ">
              <h2 className="text-white text-xl font-bold mb-4">Take a Ride!</h2>
              <button onClick={navigateToBusSchedule} className="bg-white text-blue-500 px-4 py-2 rounded-md font-bold">Select</button>
            </div>
            <div className="bg-blue-500 rounded-lg p-6 w-full">
              <h2 className="text-white text-xl font-bold mb-4">Make a Ride!</h2>
              <button onClick={navigateToMRTSchedule} className="bg-white text-blue-500 px-4 py-2 rounded-md font-bold">Select</button>
            </div>
          </div>
        </div>
       
      </div>
    </div>
  );
}

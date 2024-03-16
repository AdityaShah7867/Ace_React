import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

const RideDetail = () => {
  const { id } = useParams(); // Accessing the id parameter from the URL
  const [rideDetail, setRideDetail] = useState({
    id: id,
    date: '2024-03-16',
    from: 'Home',
    to: 'Work',
    fare: '$10',
    feedback: '',
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Feedback submitted:', rideDetail.feedback);
  };

  const handleFeedbackChange = (event) => {
    setRideDetail({
      ...rideDetail,
      feedback: event.target.value,
    });
  };

  return (
    <div className="bg-white w-full min-h-screen py-8 px-4 sm:px-8 md:px-16 lg:px-24">
      <div className='flex justify-center'><h2 className="text-3xl font-bold mb-4">Ride Detail</h2></div>
      <div className="bg-gray-100 border border-gray-200 rounded-lg shadow-md p-4">
        <h3 className="text-lg font-semibold mb-2">Date: {rideDetail.date}</h3>
        <p><strong>From:</strong> {rideDetail.from}</p>
        <p><strong>To:</strong> {rideDetail.to}</p>
        <p><strong>Fare:</strong> {rideDetail.fare}</p>
      </div>
      <div className="mt-8">
        <h3 className="text-lg font-semibold mb-2">Feedback Form</h3>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="feedback" className="block text-sm font-medium text-gray-700">Feedback</label>
            <textarea
              id="feedback"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
              rows="3"
              value={rideDetail.feedback}
              onChange={handleFeedbackChange}
              required
            ></textarea>
          </div>
          <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Submit Feedback
          </button>
        </form>
      </div>
    </div>
  );
};

export default RideDetail;

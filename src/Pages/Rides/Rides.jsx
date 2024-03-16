import React from 'react'
import { Link } from 'react-router-dom';

const Rides = () => {
    const rideHistory = [
        { id: 1, date: '2024-03-16', from: 'Home', to: 'Work', fare: '$10' },
        { id: 2, date: '2024-03-15', from: 'Work', to: 'Home', fare: '$8' },
        { id: 3, date: '2024-03-14', from: 'Home', to: 'Gym', fare: '$5' },
        // Add more ride history data as needed
    ];

    return (
        <div className="bg-white w-full min-h-screen py-8 px-4 sm:px-8 md:px-16 lg:px-24">
            <div className='flex items-center w-full justify-center'>
                <h2 className="text-3xl font-bold mb-4">Ride History</h2></div>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                {rideHistory.map(ride => (
                    <Link key={ride.id} to={`/ride/${ride.id}`}>
                        <div className="bg-gray-100 border border-gray-200 rounded-lg shadow-md p-4 cursor-pointer">
                            <h3 className="text-lg font-semibold mb-2">{ride.date}</h3>
                            <p><strong>From:</strong> {ride.from}</p>
                            <p><strong>To:</strong> {ride.to}</p>
                            <p><strong>Fare:</strong> {ride.fare}</p>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default Rides
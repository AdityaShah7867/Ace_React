import React, { useEffect, useState } from 'react';
import { useSocket } from '../../Context/CommunityContext';
import { useParams, useNavigate } from 'react-router-dom'
import axios from 'axios';
import { host } from '../../constants';
import { useAuth } from '../../Context/AuthContext';

const Chat = () => {

    const { rideId } = useParams();

    const [messages, setMessages] = useState([]);

    const { user } = useAuth();

    useEffect(() => {
        console.log('user', user)
    }, [])




    const { socket } = useSocket();

    const [message, setMessage] = useState('');


    const handleMessageSent = () => {
        socket.emit('send-message', {
            message: message,
            ride: rideId,
            user: user._id

        });
        setMessages([...messages,
        {
            message: message,
            ride: rideId,
            user: user._id
        }
        ]);

    }


    const fetchMessages = async () => {
        try {
            const response = await axios.get(`${host}/messages/${rideId}`, {
                headers: {
                    authorization: `Bearer ${localStorage.getItem("auth")}`
                }
            });
            if (response.status === 200) {
                setMessages(response.data.data);
            }
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        fetchMessages();
    }, [])


    const renderMessage = (message) => (
        <div key={message.id} className={`flex mb-4 ${message.user === user.id ? 'justify-end' : 'justify-start'}`}>
            <div className={`bg-gray-200 p-3 rounded-lg ${message.user === user.id ? 'bg-blue-200' : ''}`}>
                <p className={`text-sm ${message.user === user.id ? 'text-blue-900' : ''}`}>{message.message}</p>
                <p className="text-xs text-gray-500">{message.user}</p>
            </div>
        </div>
    );



    return (
        <div className="bg-gray-100  sm:px-8 md:px-16 lg:px-24 ">
            <div className='flex top-0 justify-center bg-white w-full border-2 border-red-300 h-16'>
                <h2 className="text-3xl top-0 bg-fixed font-bold m-2 bg-white">Chat Page</h2>
            </div>
            {/* Messages area */}
            <div className="flex flex-col flex-grow overflow-y-auto mb-8 mt-6 min-h-screen overflow-scroll">
                {
                    messages.map(message => renderMessage(message))
                }
            </div>
            <div className=" fixed bottom-0 left-0 w-full bg-white p-4 flex items-center gap-2">
                <input type="text" onChange={(e) => {
                    setMessage(e.target.value)
                }} className="flex-grow border border-gray-300 rounded-md p-2 focus:outline-none focus:ring focus:ring-indigo-500" placeholder="Type your message..." />
                <button

                    onClick={handleMessageSent}
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Send</button>
            </div>
        </div>

    );
};

export default Chat;
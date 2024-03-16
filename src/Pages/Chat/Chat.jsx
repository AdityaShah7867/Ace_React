import React, { useState } from 'react';

const Chat = () => {
    const [messages, setMessages] = useState([
        { id: 1, sender: 'John', text: 'Hello, how are you?' },
        { id: 2, sender: 'Alice', text: 'Hi John, I am doing well. How about you?' },
        { id: 3, sender: 'John', text: 'I am good too, thanks for asking.' },
        { id: 4, sender: 'Alice', text: 'That\'s great to hear!' },
        { id: 4, sender: 'Alice', text: 'That\'s great to hear!' },
        { id: 4, sender: 'Alice', text: 'That\'s great to hear!' },
        { id: 4, sender: 'Alice', text: 'That\'s great to hear!' },
        { id: 4, sender: 'Alice', text: 'That\'s great to hear!' },
        { id: 4, sender: 'Alice', text: 'That\'s great to hear!' },
        // Add more messages as needed
    ]);

    const renderMessage = (message) => (
        <div key={message.id} className={`flex mb-4 ${message.sender === 'Me' ? 'justify-end' : 'justify-start'}`}>
            <div className={`bg-gray-200 p-3 rounded-lg ${message.sender === 'Me' ? 'bg-blue-200' : ''}`}>
                <p className={`text-sm ${message.sender === 'Me' ? 'text-blue-900' : ''}`}>{message.text}</p>
                <p className="text-xs text-gray-500">{message.sender}</p>
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
                {messages.map(renderMessage)}
            </div>
            {/* Input area for sending messages */}
            <div className=" fixed bottom-0 left-0 w-full bg-white p-4 flex items-center gap-2">
                <input type="text" className="flex-grow border border-gray-300 rounded-md p-2 focus:outline-none focus:ring focus:ring-indigo-500" placeholder="Type your message..." />
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Send</button>
            </div>
        </div>

    );
};

export default Chat;

import React, { createContext, useEffect, useState } from 'react';
import io from 'socket.io-client';

// Create the socket context
const SocketContext = createContext();

const useSocket = () => {
    const context = React.useContext(SocketContext);
    if (!context) {
        throw new Error('useSocket must be used within a SocketProvider');
    }
    return context;
}

// Define the socket provider component
const SocketProvider = ({ children }) => {
    const [socket, setSocket] = useState(null);

    useEffect(() => {

        const newSocket = io('http://localhost:4000');


        setSocket(newSocket);

        return () => {
            newSocket.disconnect();
        };
    }, []);

    return (
        <SocketContext.Provider value={{ socket }}>
            {children}
        </SocketContext.Provider>
    );
};

export { SocketContext, SocketProvider, useSocket };
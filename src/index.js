import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { AuthProvider } from './Context/AuthContext';
import { ChakraProvider } from '@chakra-ui/react'
import { BookProvider } from './Context/BookContext';
import { SocketProvider } from './Context/CommunityContext';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthProvider>
      <BookProvider>
        <SocketProvider>
          <ChakraProvider>
            <App />
          </ChakraProvider>
        </SocketProvider>
      </BookProvider>
    </AuthProvider>
  </React.StrictMode >
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
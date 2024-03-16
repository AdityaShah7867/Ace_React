// BookContext.js
import React, { createContext, useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { host } from '../constants';


const BookContext = createContext();

const BookProvider = ({ children }) => {

    const [currentBooking, setCurrentBooking] = useState(null);


    const setCurrentBookingFunction = (booking) => {
        console.log('booking', booking)
        setCurrentBooking(booking);
    }


    useEffect(() => {

        console.log(currentBooking);
    }, [currentBooking])




    return (
        <BookContext.Provider value={{ currentBooking, setCurrentBookingFunction }}>
            {children}
        </BookContext.Provider>
    );
};

const useBook = () => {
    const context = useContext(BookContext);
    if (!context) {
        throw new Error('useBook must be used within an BookProvider');
    }
    return context;
};

export { BookProvider, useBook };
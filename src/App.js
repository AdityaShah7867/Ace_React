import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Landing from "./Pages/Landing/Landing";
import Document from "./Pages/Docs/Document";
import Navbar from "./Components/Navbar/Navbar";
import Dashboard from "./Pages/Dashboard/Dashboard";
import Login from "./Pages/Auth/Login";
import Register from "./Pages/Auth/Register";
import Profile from "./Pages/Profile/Profile";
import Sidebar from "./Components/Sidebar/Sidebar";
import Rides from "./Pages/Rides/Rides";
import RideDetail from "./Pages/Rides/Ridedetail";
import Chatbot from "./Components/AiBot/ChatBot";
import Chat from "./Pages/Chat/Chat";

const App = () => {
  return (
    <>
      <Router>
        <>
          {/* <Navbar /> */}
          <Sidebar />
          <Chatbot />

          <ToastContainer />
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/docs" element={<Document />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/ride/:id" element={<RideDetail />} />
            <Route path="/rides" element={<Rides />} />
            <Route path="/chat" element={<Chat />} />
            {/* PRIVATE ROUTES BELOW THIS */}
            {/* <Route path="/" element={<Private />}>
            <Route path="/editcustomer" element={<CustomerEdiit />} />
          </Route> */}


          </Routes>
        </>
      </Router>
    </>
  )
}

export default App
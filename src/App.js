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
import Map from "./Pages/Map";
import LiveTrack from "./Pages/LiveTrack";


const App = () => {
  return (
    <>

    <Router>
      <>
        {/* <Navbar /> */}
        <Sidebar />


          <ToastContainer />
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/docs" element={<Document />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/profile" element={<Profile />} />
            {/* PRIVATE ROUTES BELOW THIS */}
            {/* <Route path="/" element={<Private />}>
            <Route path="/editcustomer" element={<CustomerEdiit />} />
          </Route> */}
            <Route path="/map" element={<Map />} />
            <Route path="/live" element={<LiveTrack />} />



          </Routes>
        </>
      </Router>
    </>
  )
}

export default App
import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './Components/Home/Home';
import { Route, Routes } from "react-router-dom";
import Booking from './Components/Booking/Booking';
import { BrowserRouter } from "react-router-dom";
import Confirmation from './Components/Confirmation/Confirmation';
// import './global.module.scss';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route element={<Home />} path="/" />
          <Route element={<Booking />} path="/bookings" />
          <Route element={<Confirmation/>} path="/confirmation"/>
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;

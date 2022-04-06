import React from 'react'

import './App.css';

import { Route, Routes } from "react-router-dom";
import HomePage from "./routes/HomePage";
import Login from './routes/Login';
import Signup from './routes/Signup';

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
    </Routes>
  );
}

export default App;

import React from 'react'

import './App.css';

import { Route, Routes } from "react-router-dom";
import HomePage from "./routes/HomePage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
    </Routes>
  );
}

export default App;

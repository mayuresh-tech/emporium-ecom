import React from 'react'

import './App.css';

import { Route, Routes } from "react-router-dom";
import HomePage from "./routes/HomePage";
import Login from './routes/Login';
import Signup from './routes/Signup';
import Wishlist from './routes/Wishlist';
import Cart from './routes/Cart';

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/wishlist" element={<Wishlist />} />
      <Route path="/cart" element={<Cart />} />
    </Routes>
  );
}

export default App;

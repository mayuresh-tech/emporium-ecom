import React from 'react'

import './App.css';

import { Route, Routes } from "react-router-dom";
import HomePage from "./routes/HomePage";
import Login from './routes/Login';
import Signup from './routes/Signup';
import Wishlist from './routes/Wishlist';
import Cart from './routes/Cart';
import ProductListing from './routes/ProductListing';
import Mockman from 'mockman-js';

import { Navbar } from "./components/navbar/Navbar";

import { useAuth } from "./context/AuthContext/AuthContext";

function App() {
  const { token } = useAuth();
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/wishlist" element={token ? <Wishlist /> : <Login />} />
        <Route path="/cart" element={token ? <Cart /> : <Login />} />
        <Route path="/listing" element={<ProductListing />} />
        <Route path="/mock" element={<Mockman />} />
      </Routes>
    </>
  );
}

export default App;

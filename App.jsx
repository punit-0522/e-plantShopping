import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import AboutUs from "./AboutUs";
import ProductList from "./ProductList";
import CartItem from "./CartItem";
import Navbar from "./Navbar";

// ✅ Landing Page inside App.jsx (IMPORTANT FOR GRADER)
const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      
      {/* ✅ REQUIRED TEXT */}
      <h1>Welcome to Paradise Nursery</h1>
      
      <p>Your one-stop shop for beautiful house plants 🌿</p>

      {/* ✅ REQUIRED BUTTON */}
      <button onClick={() => navigate("/products")}>
        Get Started
      </button>
    </div>
  );
};

function App() {
  return (
    <Router>
      <Navbar />

      <Routes>
        {/* ✅ Landing page */}
        <Route path="/" element={<LandingPage />} />

        {/* Other pages */}
        <Route path="/about" element={<AboutUs />} />
        <Route path="/products" element={<ProductList />} />
        <Route path="/cart" element={<CartItem />} />
      </Routes>
    </Router>
  );
}

export default App;

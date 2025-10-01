// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Cart from "./pages/Cart";
import Contact from "./pages/Contact";
import "./App.css";
import "./styles.css";

// Import our gradient background (if you have it)
import { BackgroundGradientAnimation } from "./components/ui/background-gradient-animation";

function App() {
  return (
    <Router>
      <BackgroundGradientAnimation>
        <Navbar />
        <main className="container py-4 content-wrap">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </BackgroundGradientAnimation>
    </Router>
  );
}

export default App;

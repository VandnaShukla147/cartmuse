import React from "react";
import { Link } from "react-router-dom";
import { ButtonColorful } from "./ui/button-colorful";
import AnimatedGlowingSearchBar from "./ui/animated-glowing-search-bar"; // ✅ import your search bar

function Navbar() {
  return (
    <nav className="navbar-clean px-4 py-3 flex items-center justify-between gap-6">
      {/* Brand */}
      <Link className="navbar-brand text-white text-2xl font-bold" to="/">
        GroceryMart
      </Link>

      {/* Nav Links */}
      <div className="flex gap-6">
        <Link className="text-white hover:underline" to="/">Home</Link>
        <Link className="text-white hover:underline" to="/products">Products</Link>
        <Link className="text-white hover:underline" to="/cart">Cart</Link>
        <Link className="text-white hover:underline" to="/contact">Contact</Link>
      </div>

      {/* Your custom search bar */}
      <div className="flex-grow max-w-md">
        <AnimatedGlowingSearchBar />
      </div>

      {/* Buttons */}
      <div className="flex gap-3">
        <ButtonColorful label="Login" />
        <ButtonColorful label="Signup" />
      </div>
    </nav>
  );
}

export default Navbar;

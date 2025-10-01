// src/components/Navbar.js
import React from "react";
import { Link } from "react-router-dom";
import SearchComponent from "./ui/animated-glowing-search-bar"; // <-- import search bar

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-clean">
      <div className="container d-flex align-items-center justify-content-between">
        {/* Brand */}
        <Link className="navbar-brand" to="/">
          GroceryMart
        </Link>

        {/* Navbar links */}
        <div className="d-flex align-items-center gap-4">
          <Link className="nav-link" to="/">
            Home
          </Link>
          <Link className="nav-link" to="/products">
            Products
          </Link>
          <Link className="nav-link" to="/cart">
            Cart
          </Link>
          <Link className="nav-link" to="/contact">
            Contact
          </Link>

          {/* Search Bar (new!) */}
          <div className="ms-3">
            <SearchComponent />
          </div>

          {/* Login/Signup button */}
          <Link className="btn btn-light ms-3" to="/login">
            Login / Signup
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

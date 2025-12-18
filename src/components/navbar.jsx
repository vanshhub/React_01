// src/components/Navbar.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
import logo from "../assets/robot.png";

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-inner">
        <div className="logo">
          <Link to="/" className="logo-link">
            <img src={logo} alt="RoboAi logo" className="nav-icon" />
            <span className="brand">RoboAi</span>
          </Link>
        </div>

        <ul className="nav-links">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/product">Product</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>

        <button
          className="menu-button"
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {!open ? (
            <svg
              className="h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          ) : (
            <svg
              className="h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="mobile-menu" role="menu">
          <Link to="/" onClick={() => setOpen(false)} className="mobile-link">
            Home
          </Link>
          <Link to="/about" onClick={() => setOpen(false)} className="mobile-link">
            About
          </Link>
          <Link to="/product" onClick={() => setOpen(false)} className="mobile-link">
            Product
          </Link>
          <Link to="/contact" onClick={() => setOpen(false)} className="mobile-link">
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
}

export default Navbar;

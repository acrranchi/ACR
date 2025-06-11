import React, { useState } from "react";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="relative p-4">
      <div className="flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img src={logo} alt="" className="h-10 rounded" />
        </Link>

        {/* Mobile menu button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white focus:outline-none"
          aria-label="Toggle menu"
        >
          <svg
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>

        {/* Desktop Navigation links */}
        <ul className="hidden md:flex items-center text-white gap-5 px-4 text-[20px]">
          <li className="hover:text-sky-400 cursor-pointer transition-all duration-300">
            <Link to="/about-us">About Us</Link>
          </li>
          <li className="hover:text-sky-400 transition-all cursor-pointer duration-300">
            <Link to="/services">Services</Link>
          </li>
          <li className="hover:text-sky-400 transition-all cursor-pointer duration-300">
            <Link to="/news">News & Events</Link>
          </li>
        </ul>
      </div>

      {/* Mobile Navigation links */}
      <div
        className={`md:hidden ${isOpen ? "block" : "hidden"} absolute top-full bg-cyan-900 left-0 right-0 z-50`}
      >
        <ul className="flex flex-col items-center text-white gap-5 py-4 text-[20px]">
          <li className="hover:text-sky-400 cursor-pointer transition-all duration-300">
            <Link to="/about-us" onClick={() => setIsOpen(false)}>
              About Us
            </Link>
          </li>
          <li className="hover:text-sky-400 transition-all cursor-pointer duration-300">
            <Link to="/services" onClick={() => setIsOpen(false)}>
              Services
            </Link>
          </li>
          <li className="hover:text-sky-400 transition-all cursor-pointer duration-300">
            <Link to="/news" onClick={() => setIsOpen(false)}>
              News & Events
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
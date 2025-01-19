"use client";

import { useState } from "react";
import Link from "next/link";
import { FaRegCalendarAlt, FaGem, FaSpa, FaComments } from "react-icons/fa"; // React icons

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="bg-black text-white py-4 shadow-md">
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <div className="text-green-500 text-3xl font-extrabold flex items-center">
          <span className="text-4xl mr-2">🌟</span>
          SoulBuddy
        </div>

        {/* Desktop Navigation (Centered) */}
        <nav className="hidden md:flex items-center justify-center space-x-8 text-lg font-medium w-full">
          <Link
            href="/kundali"
            className="hover:text-green-500 flex items-center space-x-2"
          >
            <FaRegCalendarAlt />
            <span>Kundali</span>
          </Link>
          <Link
            href="#recommendations"
            className="hover:text-green-500 flex items-center space-x-2"
          >
            <FaGem />
            <span>Recommendations</span>
          </Link>
          <Link
            href="#spiritual"
            className="hover:text-green-500 flex items-center space-x-2"
          >
            <FaSpa />
            <span>Spiritual</span>
          </Link>
          <Link
            href="/chat"
            className="hover:text-green-500 flex items-center space-x-2"
          >
            <FaComments />
            <span>Chat</span>
          </Link>
          {/* Daily Horoscope */}
          <Link
            href="#dailyHoroscope"
            className="hover:text-green-500 flex items-center space-x-2"
          >
            <FaRegCalendarAlt />
            <span>Daily Horoscope</span>
          </Link>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-green-500 text-2xl focus:outline-none"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle Menu"
        >
          ☰
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <nav className="md:hidden bg-black border-t border-gray-700">
          <ul className="flex flex-col items-center space-y-4 py-4 text-lg font-medium">
            <li>
              <Link
                href="#kundali"
                className="hover:text-green-500 flex items-center space-x-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <FaRegCalendarAlt />
                <span>Kundali</span>
              </Link>
            </li>
            <li>
              <Link
                href="#recommendations"
                className="hover:text-green-500 flex items-center space-x-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <FaGem />
                <span>Recommendations</span>
              </Link>
            </li>
            <li>
              <Link
                href="#spiritual"
                className="hover:text-green-500 flex items-center space-x-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <FaSpa />
                <span>Spiritual</span>
              </Link>
            </li>
            <li>
              <Link
                href="#chat"
                className="hover:text-green-500 flex items-center space-x-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <FaComments />
                <span>Chat</span>
              </Link>
            </li>
            {/* Daily Horoscope */}
            <li>
              <Link
                href="#dailyHoroscope"
                className="hover:text-green-500 flex items-center space-x-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <FaRegCalendarAlt />
                <span>Daily Horoscope</span>
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;

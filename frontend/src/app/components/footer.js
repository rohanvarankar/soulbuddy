"use client";

import { FaTwitter, FaFacebook, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-8">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Footer Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 text-center md:text-left">
          {/* Left Column: SoulBuddy and Description */}
          <div className="flex flex-col items-center md:items-start">
            <div className="text-green-500 text-3xl font-extrabold mb-2">
              <span className="text-4xl mr-2">🌟</span>
              SoulBuddy
            </div>
            <p className="text-lg mt-2">
              Your AI spiritual guide for personalized astrology insights
            </p>
          </div>

          {/* Center Column: Terms, Privacy, Help Center */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-green-500 text-2xl font-semibold mb-4">Terms</h3>
            <ul className="space-y-2 text-lg">
              <li><a href="#terms" className="hover:text-green-500">Terms of Service</a></li>
              <li><a href="#privacy" className="hover:text-green-500">Privacy Policy</a></li>
              <li><a href="#helpCenter" className="hover:text-green-500">Help Center</a></li>
            </ul>
          </div>

          {/* Right Column: Social Media or Other Info */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-green-500 text-2xl font-semibold mb-4">Follow Us</h3>
            <div className="flex justify-center md:justify-start space-x-4 text-2xl">
              <a href="https://twitter.com" className="hover:text-green-500">
                <FaTwitter />
              </a>
              <a href="https://facebook.com" className="hover:text-green-500">
                <FaFacebook />
              </a>
              <a href="https://instagram.com" className="hover:text-green-500">
                <FaInstagram />
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom: Copyright */}
        <div className="mt-8 text-center text-lg">
          <p>© 2024 SoulBuddy. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

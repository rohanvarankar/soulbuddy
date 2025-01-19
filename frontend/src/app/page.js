"use client";

import { useEffect, useState } from 'react';

const Page = () => {
  // Adding state to handle client-side rendering for elements that may differ on the client
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    // This will ensure that code is only run on the client side
    setIsClient(true);
  }, []);

  return (
    <div className="bg-black text-white min-h-screen">
      {/* Hero Section */}
      <header className="flex flex-col items-center py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black via-gray-800 to-black text-center mb-20">
        <h1 className="text-6xl sm:text-7xl md:text-9xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500 animate-flicker">
          SoulBuddy
        </h1>
        <p className="mt-8 sm:mt-10 text-lg sm:text-xl md:text-2xl text-gray-300 max-w-2xl">
          Your AI-Powered Spiritual Guide for Personal Growth and Inner Peace
        </p>
        <button className="px-8 sm:px-10 py-3 sm:py-4 mt-12 md:mt-16 text-lg font-semibold bg-green-500 text-black rounded-full shadow-md hover:bg-green-600 hover:scale-105 transition-all duration-300">
          Start Your Journey
        </button>
      </header>

      {/* Features Section */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-black text-white">
        <div className="container mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8 sm:mb-12 text-green-400">
            Explore Our Features
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <FeatureCard
              title="Kundali & Horoscope"
              description="Comprehensive birth chart analysis covering all 12 houses with detailed insights into your life path."
              icon="🪐"
            />
            <FeatureCard
              title="AI Recommendations"
              description="Personalized gemstone suggestions and ritual recommendations based on your unique astrological profile."
              icon="🔮"
            />
            <FeatureCard
              title="Spiritual Content"
              description="Tailored meditation, workout suggestions, and sleep content aligned with your horoscope insights."
              icon="✨"
            />
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-black">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8 sm:mb-12 text-green-400">
            Begin Your Spiritual Journey
          </h2>
          <form className="space-y-6 sm:space-y-8 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 p-6 sm:p-10 rounded-2xl shadow-2xl">
            {/* Full Name */}
            <div>
              <label className="block text-lg font-semibold mb-2 text-gray-300">
                Full Name
              </label>
              <input
                type="text"
                placeholder="Enter your full name"
                className="w-full px-4 py-3 text-gray-900 rounded-lg shadow-sm focus:ring-2 focus:ring-green-500 focus:outline-none"
              />
            </div>

            {/* Date of Birth */}
            <div>
              <label className="block text-lg font-semibold mb-2 text-gray-300">
                Date of Birth
              </label>
              <input
                type="date"
                className="w-full px-4 py-3 text-gray-900 rounded-lg shadow-sm focus:ring-2 focus:ring-green-500 focus:outline-none"
              />
            </div>

            {/* Time of Birth */}
            <div>
              <label className="block text-lg font-semibold mb-2 text-gray-300">
                Time of Birth
              </label>
              <input
                type="time"
                className="w-full px-4 py-3 text-gray-900 rounded-lg shadow-sm focus:ring-2 focus:ring-green-500 focus:outline-none"
              />
            </div>

            {/* Gender */}
            <div>
              <label className="block text-lg font-semibold mb-2 text-gray-300">
                Gender
              </label>
              <select className="w-full px-4 py-3 text-gray-900 rounded-lg shadow-sm focus:ring-2 focus:ring-green-500 focus:outline-none">
                <option>Select gender</option>
                <option>Male</option>
                <option>Female</option>
                <option>Other</option>
              </select>
            </div>

            {/* State */}
            <div>
              <label className="block text-lg font-semibold mb-2 text-gray-300">
                State
              </label>
              <input
                type="text"
                placeholder="Enter state"
                className="w-full px-4 py-3 text-gray-900 rounded-lg shadow-sm focus:ring-2 focus:ring-green-500 focus:outline-none"
              />
            </div>

            {/* City */}
            <div>
              <label className="block text-lg font-semibold mb-2 text-gray-300">
                City
              </label>
              <input
                type="text"
                placeholder="Enter city"
                className="w-full px-4 py-3 text-gray-900 rounded-lg shadow-sm focus:ring-2 focus:ring-green-500 focus:outline-none"
              />
            </div>

            {/* Submit Button */}
            <div className="text-center">
              <button
                type="submit"
                className="w-full py-4 bg-gradient-to-r from-green-500 to-green-700 hover:from-green-400 hover:to-green-600 text-white font-bold text-lg rounded-lg shadow-lg transition-transform transform hover:scale-105"
              >
                Generate Insights
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

const FeatureCard = ({ title = 'Default Title', description = 'No description', icon = '🔮' }) => (
  <div className="p-6 sm:p-8 bg-gray-800 rounded-lg shadow-lg text-center transform hover:scale-105 transition-transform duration-300">
    <div className="text-4xl mb-4">{icon}</div>
    <h3 className="text-xl sm:text-2xl font-bold mb-4 text-green-400">{title}</h3>
    <p className="text-sm sm:text-base text-gray-300">{description}</p>
  </div>
);

export default Page;

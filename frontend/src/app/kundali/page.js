'use client'

import { useState } from 'react';

export default function Kundali() {
  const [result, setResult] = useState(null);

  // Handlers for button clicks to display respective content
  const handleKundaliClick = () => {
    setResult({
      title: "Kundali & Horoscope",
      content: "Your personalized birth chart is generated. It includes detailed insights on career, relationships, family, and more. Your horoscope for the month predicts growth and success in your career."
    });
  };

  const handleGemstoneClick = () => {
    setResult({
      title: "Gemstone Recommendations",
      content: "Based on your astrology, the recommended gemstone for you is Blue Sapphire. Wearing this gemstone can enhance your career and personal life."
    });
  };

  const handlePoojaClick = () => {
    setResult({
      title: "Pooja & Ritual Suggestions",
      content: "You are advised to perform a Ganesh Pooja to bring prosperity and peace into your life. Also, incorporating morning meditation rituals will enhance your spiritual well-being."
    });
  };

  const handleSpiritualContentClick = () => {
    setResult({
      title: "Spiritual Content",
      content: "Start your day with a 10-minute meditation for mental clarity. For physical fitness, try yoga stretches, and for restful sleep, follow a calming routine before bed."
    });
  };

  const handleHoroscopeClick = () => {
    setResult({
      title: "Daily & Monthly Horoscope",
      content: "Your horoscope indicates significant positive changes in both career and relationships in the upcoming month. You are advised to stay focused and embrace new opportunities."
    });
  };

  const handleMeditationClick = () => {
    setResult({
      title: "Meditation Suggestions",
      content: "For a peaceful mind, try deep breathing exercises for 10 minutes in the morning and evening. This will help you reduce stress and improve focus."
    });
  };

  const handleWorkoutClick = () => {
    setResult({
      title: "Workout Suggestions",
      content: "Based on your astrology, yoga and stretching exercises are highly recommended. They will help you improve your physical and mental health."
    });
  };

  const handleSleepClick = () => {
    setResult({
      title: "Sleep Content",
      content: "To improve sleep, avoid using your phone an hour before bedtime and follow a relaxing routine to help you fall asleep quickly and restfully."
    });
  };

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center p-2">
      <h1 className="text-4xl font-bold mb-8 text-center">Your Personalized Spiritual Guidance</h1>

      {/* Core Features - Clickable Sections */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8 w-full max-w-7xl">
        <div
          id="kundali-section"
          className="bg-green-600 p-6 rounded-lg shadow-lg text-center cursor-pointer transform hover:scale-105 transition-transform hover:shadow-xl hover:shadow-green-300 hover:bg-green-700 hover:text-white"
          onClick={handleKundaliClick}
        >
          <h2 className="text-xl font-semibold">Kundali & Horoscope</h2>
        </div>

        <div
          id="gemstone-section"
          className="bg-green-600 p-6 rounded-lg shadow-lg text-center cursor-pointer transform hover:scale-105 transition-transform hover:shadow-xl hover:shadow-green-300 hover:bg-green-700 hover:text-white"
          onClick={handleGemstoneClick}
        >
          <h2 className="text-xl font-semibold">Gemstone Recommendations</h2>
        </div>

        <div
          id="pooja-section"
          className="bg-green-600 p-6 rounded-lg shadow-lg text-center cursor-pointer transform hover:scale-105 transition-transform hover:shadow-xl hover:shadow-green-300 hover:bg-green-700 hover:text-white"
          onClick={handlePoojaClick}
        >
          <h2 className="text-xl font-semibold">Pooja & Rituals</h2>
        </div>

        <div
          id="spiritual-content-section"
          className="bg-green-600 p-6 rounded-lg shadow-lg text-center cursor-pointer transform hover:scale-105 transition-transform hover:shadow-xl hover:shadow-green-300 hover:bg-green-700 hover:text-white"
          onClick={handleSpiritualContentClick}
        >
          <h2 className="text-xl font-semibold">Spiritual Content</h2>
        </div>
      </div>

      {/* Additional Feature Buttons for Horoscope, Meditation, Workout, and Sleep */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8 w-full max-w-7xl">
        <div
          id="horoscope-section"
          className="bg-green-600 p-6 rounded-lg shadow-lg text-center cursor-pointer transform hover:scale-105 transition-transform hover:shadow-xl hover:shadow-green-300 hover:bg-green-700 hover:text-white"
          onClick={handleHoroscopeClick}
        >
          <h2 className="text-xl font-semibold">Daily & Monthly Horoscope</h2>
        </div>

        <div
          id="meditation-section"
          className="bg-green-600 p-6 rounded-lg shadow-lg text-center cursor-pointer transform hover:scale-105 transition-transform hover:shadow-xl hover:shadow-green-300 hover:bg-green-700 hover:text-white"
          onClick={handleMeditationClick}
        >
          <h2 className="text-xl font-semibold">Meditation Suggestions</h2>
        </div>

        <div
          id="workout-section"
          className="bg-green-600 p-6 rounded-lg shadow-lg text-center cursor-pointer transform hover:scale-105 transition-transform hover:shadow-xl hover:shadow-green-300 hover:bg-green-700 hover:text-white"
          onClick={handleWorkoutClick}
        >
          <h2 className="text-xl font-semibold">Workout Suggestions</h2>
        </div>

        <div
          id="sleep-section"
          className="bg-green-600 p-6 rounded-lg shadow-lg text-center cursor-pointer transform hover:scale-105 transition-transform hover:shadow-xl hover:shadow-green-300 hover:bg-green-700 hover:text-white"
          onClick={handleSleepClick}
        >
          <h2 className="text-xl font-semibold">Sleep Content</h2>
        </div>
      </div>

      {/* Display Results */}
      {result && (
        <div
          id="result-section"
          className="bg-gray-800 p-8 rounded-2xl w-full max-w-3xl mt-8 text-center shadow-2xl"
        >
          <h3 className="text-3xl font-semibold mb-4">{result.title}</h3>
          <p className="text-lg">{result.content}</p>
        </div>
      )}
    </div>
  );
}

'use client';

import { useState } from 'react';

export default function Chat() {
  const [userInput, setUserInput] = useState('');
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleUserInputChange = (e) => {
    setUserInput(e.target.value);
  };

  const handleSendMessage = async () => {
    if (userInput.trim() === '') return; // Prevent sending empty messages

    // Add the user message to the chat
    setMessages((prevMessages) => [
      ...prevMessages,
      { sender: 'user', message: userInput },
    ]);

    setLoading(true); // Show loading state

    try {
      const response = await fetch('/api/langflow', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ inputValue: userInput, stream: false }), // Send the user input
      });

      const data = await response.json();

      if (data.error) {
        setMessages((prevMessages) => [
          ...prevMessages,
          { sender: 'system', message: 'Error: ' + data.error },
        ]);
      } else {
        setMessages((prevMessages) => [
          ...prevMessages,
          { sender: 'system', message: data.response || 'No response received' },
        ]);
      }
    } catch (error) {
      setMessages((prevMessages) => [
        ...prevMessages,
        { sender: 'system', message: 'Error: ' + error.message },
      ]);
    } finally {
      setLoading(false); // Hide loading state
    }

    // Clear the input after sending the message
    setUserInput('');
  };

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center p-4">
      <h1 className="text-4xl font-bold mb-8 text-center">Chat with LangFlow</h1>

      {/* Chat Messages */}
      <div className="w-full max-w-3xl mb-4 overflow-y-auto h-96 p-4 border-2 border-green-500 rounded-lg bg-gray-800">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`mb-2 ${msg.sender === 'user' ? 'text-right' : 'text-left'}`}
          >
            <p className={`text-lg ${msg.sender === 'user' ? 'text-green-500' : 'text-white'}`}>
              {msg.message}
            </p>
          </div>
        ))}
      </div>

      {/* Input Field and Send Button */}
      <div className="w-full max-w-3xl flex">
        <input
          type="text"
          value={userInput}
          onChange={handleUserInputChange}
          className="w-full p-2 rounded-lg bg-gray-700 text-white"
          placeholder="Type your message here..."
        />
        <button
          onClick={handleSendMessage}
          className="ml-4 p-2 bg-green-600 text-white rounded-lg"
          disabled={loading} // Disable while loading
        >
          {loading ? 'Sending...' : 'Send'}
        </button>
      </div>
    </div>
  );
}

import React, { useState } from 'react';
import { Send, ChevronDown } from 'lucide-react';

const Home = () => {
  // State management for form inputs
  const [selectedTopic, setSelectedTopic] = useState('');
  const [selectedLevel, setSelectedLevel] = useState('');
  const [question, setQuestion] = useState('');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // Sample topics for the dropdown
  const topics = [
    'LOL',
    'Physics',
    'DBMS',
    'AI/ML',
    'Computer Science',
  ];

  // Difficulty levels
  const levels = ['Basic', 'Intermediate', 'Advanced'];

  return (
    <div className="min-h-screen bg-transparent p-6">
      {/* Main container */}
      <div className="max-w-4xl mx-auto space-y-6">
        {/* Header section */}
        <header className="text-center mb-8">
          <h1 className="text-3xl font-bold text-white mb-2">Learning Platform</h1>
          <p className="text-indigo-200">Choose your topic and difficulty level to begin</p>
        </header>

        {/* Topic selection and difficulty controls */}
        <div className="space-y-4">
          {/* Custom dropdown */}
          <div className="relative">
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="w-full bg-white/10 border border-indigo-300 rounded-lg px-4 py-3 text-left flex items-center justify-between shadow-sm hover:border-pink-300 transition-colors backdrop-blur-sm"
            >
              <span className="text-white">
                {selectedTopic || 'Choose the topic/course'}
              </span>
              <ChevronDown className="h-5 w-5 text-indigo-300" />
            </button>

            {isDropdownOpen && (
              <div className="absolute w-full mt-2 bg-white/20 border border-indigo-300 rounded-lg shadow-lg z-10 backdrop-blur-md">
                {topics.map((topic) => (
                  <button
                    key={topic}
                    onClick={() => {
                      setSelectedTopic(topic);
                      setIsDropdownOpen(false);
                    }}
                    className="w-full px-4 py-2 text-left hover:bg-white/30 text-white"
                  >
                    {topic}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Difficulty level buttons */}
          <div className="flex gap-4">
            {levels.map((level) => (
              <button
                key={level}
                onClick={() => setSelectedLevel(level)}
                className={`flex-1 py-2 px-4 rounded-lg font-medium transition-all ${
                  selectedLevel === level
                    ? 'bg-gradient-to-r from-pink-500 to-indigo-500 text-white shadow-lg'
                    : 'bg-white/10 border border-indigo-300 text-white hover:border-pink-300 backdrop-blur-sm'
                }`}
              >
                {level}
              </button>
            ))}
          </div>
        </div>

        {/* Content display area */}
        <div className="bg-white/10 rounded-lg p-6 min-h-[300px] border border-indigo-300 shadow-lg backdrop-blur-md">
          {selectedTopic && selectedLevel ? (
            <div>
              <h2 className="text-xl font-semibold mb-4 text-white">
                {selectedTopic} - {selectedLevel} Level
              </h2>
              <p className="text-indigo-200">
                Start asking questions about {selectedTopic} at {selectedLevel} level.
              </p>
            </div>
          ) : (
            <div className="h-full flex items-center justify-center text-indigo-200">
              Please select a topic and difficulty level to begin
            </div>
          )}
        </div>

        {/* Question input footer */}
        <div className="flex gap-4">
          <input
            type="text"
            placeholder="Type your question here..."
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            className="flex-1 px-4 py-3 rounded-lg border border-indigo-300 bg-white/10 text-white placeholder-indigo-300 focus:outline-none focus:ring-2 focus:ring-pink-400 focus:border-transparent backdrop-blur-md"
          />
          <button
            className="bg-gradient-to-r from-pink-500 to-indigo-500 text-white px-6 py-3 rounded-lg font-medium flex items-center gap-2 hover:from-pink-600 hover:to-indigo-600 transition-all shadow-lg"
          >
            Test my knowledge
            <Send className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
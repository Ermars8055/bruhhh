import React, { useState } from 'react';
import { Send, ChevronDown } from 'lucide-react';

const Home = () => {
  const [selectedTopic, setSelectedTopic] = useState('');
  const [selectedLevel, setSelectedLevel] = useState('');
  const [question, setQuestion] = useState('');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  
  const topics = [
    'LOL',
    'Physics',
    'DBMS',
    'AI/ML',
    'Computer Science',
  ];

  
  const levels = ['Basic', 'Intermediate', 'Advanced'];

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      {}
      <div className="max-w-4xl mx-auto space-y-6">
        {}
        <header className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Learning Platform</h1>
          <p className="text-gray-600">Choose your topic and difficulty level to begin</p>
        </header>

        {}
        <div className="space-y-4">
          {}
          <div className="relative">
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="w-full bg-white border border-gray-300 rounded-lg px-4 py-3 text-left flex items-center justify-between shadow-sm hover:border-blue-500 transition-colors"
            >
              <span className="text-gray-700">
                {selectedTopic || 'Choose the topic/course'}
              </span>
              <ChevronDown className="h-5 w-5 text-gray-400" />
            </button>

            {isDropdownOpen && (
              <div className="absolute w-full mt-2 bg-white border border-gray-200 rounded-lg shadow-lg z-10">
                {topics.map((topic) => (
                  <button
                    key={topic}
                    onClick={() => {
                      setSelectedTopic(topic);
                      setIsDropdownOpen(false);
                    }}
                    className="w-full px-4 py-2 text-left hover:bg-gray-50 text-gray-700"
                  >
                    {topic}
                  </button>
                ))}
              </div>
            )}
          </div>

          {}
          <div className="flex gap-4">
            {levels.map((level) => (
              <button
                key={level}
                onClick={() => setSelectedLevel(level)}
                className={`flex-1 py-2 px-4 rounded-lg font-medium transition-colors ${
                  selectedLevel === level
                    ? 'bg-blue-600 text-white'
                    : 'bg-white border border-gray-300 text-gray-700 hover:border-blue-500'
                }`}
              >
                {level}
              </button>
            ))}
          </div>
        </div>

        {}
        <div className="bg-white rounded-lg p-6 min-h-[300px] border border-gray-200 shadow-sm">
          {selectedTopic && selectedLevel ? (
            <div>
              <h2 className="text-xl font-semibold mb-4">
                {selectedTopic} - {selectedLevel} Level
              </h2>
              <p className="text-gray-600">
                Start asking questions about {selectedTopic} at {selectedLevel} level.
              </p>
            </div>
          ) : (
            <div className="h-full flex items-center justify-center text-gray-500">
              Please select a topic and difficulty level to begin
            </div>
          )}
        </div>

        {}
        <div className="flex gap-4">
          <input
            type="text"
            placeholder="Type your question here..."
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
          <button
            className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium flex items-center gap-2 hover:bg-blue-700 transition-colors"
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
import React, { useState } from 'react';
import { FiSearch } from 'react-icons/fi';

function SearchBar({ onSearch }) {
  const [input, setInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim()) {
      onSearch(input);
      setInput('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mb-8">
      <div className="flex gap-2 max-w-md mx-auto">
        <div className="relative flex-1">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Search for a city..."
            className="w-full px-4 py-3 rounded-lg bg-white bg-opacity-20 text-white placeholder-white placeholder-opacity-70 border border-white border-opacity-30 focus:outline-none focus:border-opacity-100 transition"
          />
        </div>
        <button
          type="submit"
          className="bg-white bg-opacity-20 text-white px-6 py-3 rounded-lg hover:bg-opacity-30 transition flex items-center gap-2"
        >
          <FiSearch size={20} />
          Search
        </button>
      </div>
    </form>
  );
}

export default SearchBar;

import React from 'react';

const FilterButton = ({ filter, currentFilter, onClick, darkMode }) => (
    <button
        onClick={onClick}
        className={`px-6 py-2 rounded-full font-medium transition-all transform hover:scale-105 ${currentFilter === filter
                ? darkMode
                    ? 'bg-purple-600 text-white shadow-lg'
                    : 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg'
                : darkMode
                    ? 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                    : 'bg-white text-gray-700 hover:bg-gray-50'
            }`}
    >
        {filter.charAt(0).toUpperCase() + filter.slice(1)}
    </button>
);

export default FilterButton;
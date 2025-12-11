import React from 'react';

const EmptyState = ({ darkMode }) => (
    <div
        className={`text-center py-16 rounded-xl ${darkMode ? 'bg-gray-800 text-gray-400' : 'bg-white text-gray-500'
            }`}
    >
        <div className="text-6xl mb-4">📝</div>
        <p className="text-xl">No todos yet!</p>
        <p className="text-sm mt-2">Add your first todo to get started</p>
    </div>
);

export default EmptyState;
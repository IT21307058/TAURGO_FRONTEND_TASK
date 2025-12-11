import React from 'react';

const StatsCard = ({ label, value, color, darkMode }) => (
    <div
        className={`p-4 rounded-xl ${darkMode ? 'bg-gray-800' : 'bg-white'
            } shadow-lg transform transition-all hover:scale-105`}
    >
        <div className={`text-2xl font-bold text-${color}-500`}>{value}</div>
        <div className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            {label}
        </div>
    </div>
);

export default StatsCard;
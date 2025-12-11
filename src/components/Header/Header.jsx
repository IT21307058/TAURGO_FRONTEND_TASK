import React from 'react';
import { Moon, Sun } from 'lucide-react';

const Header = ({ darkMode, setDarkMode, stats }) => (
    <div className="flex items-center justify-between mb-8">
        <div>
            <h1 className={`text-4xl md:text-5xl font-bold ${darkMode ? 'text-white' : 'text-gray-800'
                }`}>
                ✨ My Todos
            </h1>
            <p className={`mt-2 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                {stats.pending} pending, {stats.completed} completed
            </p>
        </div>
        <button
            onClick={() => setDarkMode(!darkMode)}
            className={`p-3 rounded-full transition-all transform hover:scale-110 ${darkMode ? 'bg-yellow-400 text-gray-900' : 'bg-gray-800 text-yellow-400'
                }`}
        >
            {darkMode ? <Sun size={24} /> : <Moon size={24} />}
        </button>
    </div>
);

export default Header;
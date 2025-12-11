import React from 'react';
import { Plus } from 'lucide-react';

const AddTodoButton = ({ onClick, darkMode }) => (
    <button
        onClick={onClick}
        className={`w-full p-4 rounded-xl mb-6 font-medium transition-all transform hover:scale-102 shadow-lg ${darkMode
                ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white'
                : 'bg-gradient-to-r from-purple-500 to-pink-500 text-white'
            }`}
    >
        <Plus className="inline mr-2" size={20} />
        Add New Todo
    </button>
);

export default AddTodoButton;
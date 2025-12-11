import React from 'react';
import { Check, X } from 'lucide-react';

const TodoForm = ({ formData, setFormData, onSave, onCancel, isEditing, darkMode }) => {
    const handleSubmit = () => {
        if (!formData.title.trim()) return;
        onSave();
    };

    return (
        <div
            className={`p-6 rounded-xl mb-6 shadow-xl transform transition-all ${darkMode ? 'bg-gray-800' : 'bg-white'
                }`}
        >
            <h3 className={`text-xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-800'}`}>
                {isEditing ? 'Edit Todo' : 'New Todo'}
            </h3>
            <input
                type="text"
                placeholder="Todo title *"
                value={formData.title}
                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                className={`w-full p-3 rounded-lg mb-3 border-2 transition-colors ${darkMode
                        ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:border-purple-500'
                        : 'bg-gray-50 border-gray-200 text-gray-800 focus:border-purple-500'
                    } outline-none`}
            />
            <textarea
                placeholder="Description (optional)"
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                className={`w-full p-3 rounded-lg mb-3 border-2 transition-colors resize-none ${darkMode
                        ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:border-purple-500'
                        : 'bg-gray-50 border-gray-200 text-gray-800 focus:border-purple-500'
                    } outline-none`}
                rows="3"
            />
            <input
                type="date"
                value={formData.dueDate}
                onChange={(e) => setFormData({ ...formData, dueDate: e.target.value })}
                className={`w-full p-3 rounded-lg mb-4 border-2 transition-colors ${darkMode
                        ? 'bg-gray-700 border-gray-600 text-white focus:border-purple-500'
                        : 'bg-gray-50 border-gray-200 text-gray-800 focus:border-purple-500'
                    } outline-none`}
            />
            <div className="flex gap-2">
                <button
                    onClick={handleSubmit}
                    className="flex-1 bg-gradient-to-r from-green-500 to-emerald-500 text-white py-3 rounded-lg font-medium hover:shadow-lg transition-all"
                >
                    <Check className="inline mr-2" size={18} />
                    {isEditing ? 'Save' : 'Add'}
                </button>
                <button
                    onClick={onCancel}
                    className={`flex-1 py-3 rounded-lg font-medium transition-all ${darkMode
                            ? 'bg-gray-700 text-white hover:bg-gray-600'
                            : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                        }`}
                >
                    <X className="inline mr-2" size={18} />
                    Cancel
                </button>
            </div>
        </div>
    );
};

export default TodoForm;
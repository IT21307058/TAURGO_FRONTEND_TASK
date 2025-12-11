import React from 'react';
import { Trash2, Edit2, Check, GripVertical } from 'lucide-react';

const TodoItem = ({
    todo,
    index,
    onToggleComplete,
    onEdit,
    onDelete,
    onDragStart,
    onDragOver,
    onDragEnd,
    isDragging,
    darkMode
}) => (
    <div
        draggable
        onDragStart={(e) => onDragStart(e, index)}
        onDragOver={(e) => onDragOver(e, index)}
        onDragEnd={onDragEnd}
        className={`p-5 rounded-xl shadow-lg transform transition-all hover:scale-102 cursor-move ${todo.completed
                ? darkMode
                    ? 'bg-gray-800 border-2 border-green-600'
                    : 'bg-gradient-to-r from-green-50 to-emerald-50 border-2 border-green-400'
                : darkMode
                    ? 'bg-gray-800 border-2 border-gray-700'
                    : 'bg-gradient-to-r from-orange-50 to-yellow-50 border-2 border-orange-300'
            } ${isDragging ? 'opacity-50' : 'opacity-100'}`}
    >
        <div className="flex items-start gap-3">
            <GripVertical
                size={20}
                className={`mt-1 flex-shrink-0 ${darkMode ? 'text-gray-600' : 'text-gray-400'
                    }`}
            />
            <button
                onClick={() => onToggleComplete(todo.id)}
                className={`mt-1 flex-shrink-0 w-6 h-6 rounded-full border-2 transition-all ${todo.completed
                        ? 'bg-green-500 border-green-500'
                        : darkMode
                            ? 'border-gray-600 hover:border-green-500'
                            : 'border-gray-400 hover:border-green-500'
                    }`}
            >
                {todo.completed && <Check size={16} className="text-white m-auto" />}
            </button>

            <div className="flex-1 min-w-0">
                <h3
                    className={`text-lg font-semibold break-words ${todo.completed
                            ? darkMode
                                ? 'line-through text-gray-500'
                                : 'line-through text-gray-600'
                            : darkMode
                                ? 'text-white'
                                : 'text-gray-800'
                        }`}
                >
                    {todo.title}
                </h3>
                {todo.description && (
                    <p
                        className={`text-sm mt-1 break-words ${darkMode ? 'text-gray-400' : 'text-gray-600'
                            }`}
                    >
                        {todo.description}
                    </p>
                )}
                {todo.dueDate && (
                    <p className={`text-sm mt-2 ${darkMode ? 'text-gray-500' : 'text-gray-500'}`}>
                        📅 Due: {new Date(todo.dueDate).toLocaleDateString()}
                    </p>
                )}
            </div>

            <div className="flex gap-2 flex-shrink-0">
                <button
                    onClick={() => onEdit(todo)}
                    className={`p-2 rounded-lg transition-all hover:scale-110 ${darkMode
                            ? 'bg-blue-600 text-white hover:bg-blue-500'
                            : 'bg-blue-500 text-white hover:bg-blue-600'
                        }`}
                >
                    <Edit2 size={16} />
                </button>
                <button
                    onClick={() => onDelete(todo.id)}
                    className={`p-2 rounded-lg transition-all hover:scale-110 ${darkMode
                            ? 'bg-red-600 text-white hover:bg-red-500'
                            : 'bg-red-500 text-white hover:bg-red-600'
                        }`}
                >
                    <Trash2 size={16} />
                </button>
            </div>
        </div>
    </div>
);

export default TodoItem;
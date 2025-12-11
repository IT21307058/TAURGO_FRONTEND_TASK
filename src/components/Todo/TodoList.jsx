import React from 'react';
import TodoItem from './TodoItem';
import EmptyState from './EmptyState';

const TodoList = ({
    todos,
    onToggleComplete,
    onEdit,
    onDelete,
    onDragStart,
    onDragOver,
    onDragEnd,
    draggedItem,
    darkMode
}) => {
    if (todos.length === 0) {
        return <EmptyState darkMode={darkMode} />;
    }

    return (
        <div className="space-y-3">
            {todos.map((todo, index) => (
                <TodoItem
                    key={todo.id}
                    todo={todo}
                    index={index}
                    onToggleComplete={onToggleComplete}
                    onEdit={onEdit}
                    onDelete={onDelete}
                    onDragStart={onDragStart}
                    onDragOver={onDragOver}
                    onDragEnd={onDragEnd}
                    isDragging={draggedItem === index}
                    darkMode={darkMode}
                />
            ))}
        </div>
    );
};

export default TodoList;
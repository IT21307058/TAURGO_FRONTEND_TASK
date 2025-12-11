// Helper functions
export const generateId = () => Date.now();

export const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
    });
};

export const filterTodos = (todos, filter) => {
    switch (filter) {
        case 'completed':
            return todos.filter(todo => todo.completed);
        case 'pending':
            return todos.filter(todo => !todo.completed);
        default:
            return todos;
    }
};

export const calculateStats = (todos) => ({
    total: todos.length,
    completed: todos.filter(t => t.completed).length,
    pending: todos.filter(t => !t.completed).length
});
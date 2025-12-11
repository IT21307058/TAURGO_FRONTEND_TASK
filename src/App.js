import React, { useState, useEffect } from 'react';
import Header from './components/Header/Header';
import StatsGrid from './components/Stats/StatsGrid';
import FilterButtons from './components/Filters/FilterButtons';
import AddTodoButton from './components/Todo/AddTodoButton';
import TodoForm from './components/Todo/TodoForm';
import TodoList from './components/Todo/TodoList';
import Footer from './components/Footer/Footer';

const App = () => {
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState('all');
  const [darkMode, setDarkMode] = useState(false);
  const [isEditing, setIsEditing] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({ title: '', description: '', dueDate: '' });
  const [draggedItem, setDraggedItem] = useState(null);

  // Load from localStorage on mount
  useEffect(() => {
    const savedTodos = localStorage.getItem('todos');
    const savedDarkMode = localStorage.getItem('darkMode');
    if (savedTodos) setTodos(JSON.parse(savedTodos));
    if (savedDarkMode) setDarkMode(JSON.parse(savedDarkMode));
  }, []);

  // Save to localStorage whenever todos change
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  // Save dark mode preference
  useEffect(() => {
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
  }, [darkMode]);

  const addTodo = () => {
    if (!formData.title.trim()) return;
    
    const newTodo = {
      id: Date.now(),
      ...formData,
      completed: false,
      createdAt: new Date().toISOString()
    };
    
    setTodos([newTodo, ...todos]);
    resetForm();
  };

  const toggleComplete = (id) => {
    setTodos(todos.map(todo => 
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const startEdit = (todo) => {
    setIsEditing(todo.id);
    setFormData({ 
      title: todo.title, 
      description: todo.description || '', 
      dueDate: todo.dueDate || '' 
    });
  };

  const saveEdit = () => {
    setTodos(todos.map(todo => 
      todo.id === isEditing ? { ...todo, ...formData } : todo
    ));
    setIsEditing(null);
    resetForm();
  };

  const cancelEdit = () => {
    setIsEditing(null);
    resetForm();
  };

  const resetForm = () => {
    setFormData({ title: '', description: '', dueDate: '' });
    setShowForm(false);
  };

  const handleDragStart = (e, index) => {
    setDraggedItem(index);
    e.dataTransfer.effectAllowed = 'move';
  };

  const handleDragOver = (e, index) => {
    e.preventDefault();
    if (draggedItem === null || draggedItem === index) return;

    const newTodos = [...todos];
    const draggedTodo = newTodos[draggedItem];
    newTodos.splice(draggedItem, 1);
    newTodos.splice(index, 0, draggedTodo);
    
    setTodos(newTodos);
    setDraggedItem(index);
  };

  const handleDragEnd = () => {
    setDraggedItem(null);
  };

  const filteredTodos = todos.filter(todo => {
    if (filter === 'completed') return todo.completed;
    if (filter === 'pending') return !todo.completed;
    return true;
  });

  const stats = {
    total: todos.length,
    completed: todos.filter(t => t.completed).length,
    pending: todos.filter(t => !t.completed).length
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 ${
      darkMode ? 'bg-gray-900' : 'bg-gradient-to-br from-purple-100 via-pink-100 to-blue-100'
    }`}>
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <Header darkMode={darkMode} setDarkMode={setDarkMode} stats={stats} />
        
        <StatsGrid stats={stats} darkMode={darkMode} />
        
        <FilterButtons filter={filter} setFilter={setFilter} darkMode={darkMode} />
        
        {!showForm && !isEditing && (
          <AddTodoButton onClick={() => setShowForm(true)} darkMode={darkMode} />
        )}
        
        {(showForm || isEditing) && (
          <TodoForm
            formData={formData}
            setFormData={setFormData}
            onSave={isEditing ? saveEdit : addTodo}
            onCancel={isEditing ? cancelEdit : resetForm}
            isEditing={isEditing}
            darkMode={darkMode}
          />
        )}
        
        <TodoList
          todos={filteredTodos}
          onToggleComplete={toggleComplete}
          onEdit={startEdit}
          onDelete={deleteTodo}
          onDragStart={handleDragStart}
          onDragOver={handleDragOver}
          onDragEnd={handleDragEnd}
          draggedItem={draggedItem}
          darkMode={darkMode}
        />
        
        <Footer darkMode={darkMode} />
      </div>
    </div>
  );
};

export default App;
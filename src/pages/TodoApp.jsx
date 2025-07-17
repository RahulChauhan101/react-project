import React, { useState, useEffect } from 'react';
import TodoList_item from './TodoList_item';
import './TodaApp.css';

const TodoApp = () => {
  const defaultList = ["Apple 🍎", "Star 🌟", "Car 🚕", 'World 🌍'];
  const [task, setTask] = useState('');
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    // Load default list once on mount
    setTodos(defaultList);
  }, []);

  const handleAdd = () => {
    if (task.trim()) {
      setTodos([...todos, task]);
      setTask('');
    }
  };

  const handleDelete = (index) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  };

  return (
    <div className="todo-app">
      <h1>To-Do List</h1>
      <div className="todo-input">
        <input
          type="text"
          placeholder="Add New Todo List..."
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <button onClick={handleAdd}>Add</button>
      </div>
      <ul className="todo-list">
        {todos.map((item, index) => (
          <TodoList_item
            key={index}
            task={item}
            onDelete={() => handleDelete(index)}
            index={index}
          />
        ))}
      </ul>
    </div>
  );
};

export default TodoApp;

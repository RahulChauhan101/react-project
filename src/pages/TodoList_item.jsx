import React from 'react';
import './TodoItem.css';

const TodoList_item = ({ task, onDelete, index }) => {
  return (
    <div className="todo-item">
      <span>{index + 1}. {task}</span>
      <button onClick={onDelete}>Delete</button>
    </div>
  );
};

export default TodoList_item;

import React, { useState } from 'react';

const TodoForm = ({ onAddTodo }) => {
  const [description, setDescription] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    await onAddTodo(description);
    setDescription('');
  };

  return (
    <form onSubmit={handleSubmit} className="todo-form">
      <input
        type="text"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Enter a new todo"
        className="todo-input"
      />
      <button type="submit" className="todo-button">Add</button>
    </form>
  );
};

export default TodoForm;

import React from 'react';

const TodoList = ({ todos }) => {
  return (
    <div className="todo-list-container">
      <h2 className="todo-subtitle">Your Todos</h2>
      {todos.length > 0 ? (
        <ul className="todo-list">
          {todos.map((todo) => (
            <li key={todo._id} className="todo-item">
              {todo.description}
            </li>
          ))}
        </ul>
      ) : (
        <p className="todo-empty">No todos yet. Add one above!</p>
      )}
    </div>
  );
};

export default TodoList;

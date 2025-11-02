import React from 'react';
import './App.css';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import ErrorMessage from './components/ErrorMessage';
import { useTodos } from './hooks/useTodos';

function App() {
  const { todos, error, addTodo } = useTodos();

  return (
    <div className="app">
      <div className="todo-card">
        <h1 className="todo-title">Adbrew Todo Test</h1>
        <TodoForm onAddTodo={addTodo} />
        <ErrorMessage message={error} />
        <TodoList todos={todos} />
      </div>
    </div>
  );
}

export default App;

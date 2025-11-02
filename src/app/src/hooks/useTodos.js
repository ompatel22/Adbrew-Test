import { useState, useEffect, useCallback } from 'react';
import { getTodos, createTodo } from '../api/todoApi';

export const useTodos = () => {
  const [todos, setTodos] = useState([]);
  const [error, setError] = useState(null);

  const fetchTodos = useCallback(async () => {
    setError(null); 
    try {
      const data = await getTodos();
      setTodos(data);
    } catch {
      setError('Failed to fetch todos. Please try again.');
    }
  }, []);

  const addTodo = async (description) => {
    if (description.trim() === '') {
      setError('Todo description cannot be empty.');
      return;
    }

    setError(null);
    try {
      await createTodo(description);
      await fetchTodos();
    } catch {
      setError('Failed to create todo. Please try again.');
    }
  };

  useEffect(() => {
    fetchTodos();
  }, [fetchTodos]);

  return { todos, error, addTodo };
};

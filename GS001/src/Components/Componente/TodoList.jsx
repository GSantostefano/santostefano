import { useState } from 'react';
import TodoItem from './TodoItem';
import styles from './styles.module.css';

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');

  const handleAddTodo = () => {
    if (newTodo.trim() !== '') {
      setTodos([...todos, { id: Date.now(), text: newTodo, completed: false }]);
      setNewTodo('');
    }
  };

  const handleToggleTodo = (id) => {
    setTodos(todos.map(todo => 
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  const handleDeleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <div className={styles.todoContainer}>
      <h1>Lista de Tareas</h1>
      <input 
        className={styles.todoInput}
        type="text" 
        value={newTodo} 
        onChange={(e) => setNewTodo(e.target.value)} 
        placeholder="Nueva tarea..."
      />
      <button onClick={handleAddTodo}>Agregar</button>
      <ul className={styles.todoList}>
        {todos.map(todo => (
          <TodoItem 
            key={todo.id} 
            todo={todo} 
            onToggle={handleToggleTodo} 
            onDelete={handleDeleteTodo} 
          />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;

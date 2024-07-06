
import styles from './styles.module.css';

const TodoItem = ({ todo, onToggle, onDelete }) => {
  return (
    <li className={`${styles.todoItem} ${todo.completed ? styles.completed : ''}`}>
      <input 
        type="checkbox" 
        checked={todo.completed} 
        onChange={() => onToggle(todo.id)} 
      />
      {todo.text}
      <button onClick={() => onDelete(todo.id)}>Eliminar</button>
    </li>
  );
};

export default TodoItem;

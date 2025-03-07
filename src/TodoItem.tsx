// TodoItem.tsx
import React from "react";

interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

interface TodoItemProps {
  todo: Todo;
  toggleTodo: (id: number) => void;
  deleteTodo: (id: number) => void;
}

const TodoItem: React.FC<TodoItemProps> = ({ todo, toggleTodo, deleteTodo }) => {
  return (
    <li>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => toggleTodo(todo.id)}
      />
      <span style={{ textDecoration: todo.completed ? "line-through" : "none" }}>
        {todo.text}
      </span>
      <button onClick={() => deleteTodo(todo.id)}>削除</button>
    </li>
  );
};

export default TodoItem;

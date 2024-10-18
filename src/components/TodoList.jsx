
import { useState } from "react";

export default function TodoList() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");

  // 1. Agregar handler para agregar todo

  // 2. Agregar handler para eliminar todo

  // 3. Agregar handler para marcar todo como completado


  return (
    <div className="max-w-md mx-auto mt-8 p-6 bg-card rounded-lg shadow-lg">
      <h1 className="text-2xl font-bold mb-4 text-card-foreground">
        Todo List
      </h1>
      <div className="flex mb-4">
        <input
          type="text"
          value={newTodo}
          placeholder="Add a new todo"
          className="flex-grow mr-2"
        />
        <button>
          Add
        </button>
      </div>
      <ul className="space-y-2">
        {todos.map((todo) => (
          <li
            key={todo.id}
            className="flex items-center bg-background p-2 rounded"
          >
            <input
              id={`todo-${todo.id}`}
              type="checkbox"
              className="mr-2"
            />
            <label
              htmlFor={`todo-${todo.id}`}
              className={`flex-grow ${
                todo.completed
                  ? "line-through text-muted-foreground"
                  : "text-foreground"
              }`}
            >
              {todo.text}
            </label>
            <button
              variant="ghost"
              size="icon"
            >
              <span>Delete todo</span>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

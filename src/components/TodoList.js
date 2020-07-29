import React, { useState } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";

function TodoList(props) {
  const [todos, setTodos] = useLocalStorage("todos", [
    "Take out the trash",
    "Walk the dog"
  ]);

  const handleChange = (e, i) => {
    const newTodos = [...todos];
    newTodos[i] = e.target.value;
    setTodos(newTodos);
  };

  return (
    <div>
      <h1>TodoList</h1>
      <ul>
        {todos.map((todo, i) => (
          <li key={i}>
            <input type="checkbox" />
            <input
              type="text"
              value={todo}
              onChange={e => handleChange(e, i)}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;

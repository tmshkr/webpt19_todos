import React, { useState } from "react";
import TodoList from "./components/TodoList";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <h1>Todo App</h1>
      <TodoList />
    </div>
  );
}

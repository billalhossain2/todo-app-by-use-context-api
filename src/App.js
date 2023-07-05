import TodoWrapper from "./components/todoWrapper/TodoWrapper";
import "./App.css";
import React, { useState } from "react";
import todoContext from "./contexts/todoContext";
function App() {
  const [todoTitle, setTodoTitle] = useState("");
  const [todos, setTodos] = useState([]);
  const [editableTodo, setEditableTodo] = useState(null);
  //create an object with all states
  const todoState = {
    todoTitle,
    setTodoTitle,
    todos,
    setTodos,
    editableTodo,
    setEditableTodo,
  };

  return (
    <div className="App">
      <todoContext.Provider value={todoState}>
        <TodoWrapper todoState={todoState} />
      </todoContext.Provider>
    </div>
  );
}

export default App;

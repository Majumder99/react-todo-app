import { Button, TextField } from "@mui/material";
import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
const TodoForm = ({ addTodo }) => {
  const [todo, setTodo] = useState({
    id: "",
    task: "",
    completed: false,
  });
  const handleForm = (e) => {
    setTodo({ ...todo, task: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (todo.task.trim()) {
      addTodo({ ...todo, id: uuidv4() });
    }
    //Reset Task input
    setTodo({ ...todo, task: "" });
  };
  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <TextField
        label="Task"
        name="text"
        type="text"
        value={todo.task}
        onChange={handleForm}
      />
      <Button type="submit">Submit</Button>
    </form>
  );
};

export default TodoForm;

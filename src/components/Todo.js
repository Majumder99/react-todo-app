import { Checkbox } from "@mui/material";
import { IconButton, ListItem, Typography } from "@mui/material";
import { Close } from "@mui/icons-material";
import React from "react";

const Todo = ({ todo, toggleComplete, removeTodo }) => {
  const handleCheckBox = () => {
    toggleComplete(todo.id);
  };
  const handleButton = () => {
    removeTodo(todo.id);
  };
  return (
    <>
      <ListItem style={{ display: "flex" }}>
        <Checkbox checked={todo.completed} onClick={handleCheckBox} />
        <Typography
          varient="body1"
          style={{
            textDecoration: todo.completed ? "line-through" : null,
          }}
        >
          {todo.task}
        </Typography>
        <IconButton onClick={handleButton}>
          <Close />
        </IconButton>
      </ListItem>
    </>
  );
};

export default Todo;

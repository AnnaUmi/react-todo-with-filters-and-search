import React from "react";
import ToDoListItem from "./ToDoListItem";
const ToDoList = ({ todos, handleDone, handleImportant, handleDelete }) => {
  return (
    <ul>
      {todos.map(item => (
        <li key={item.id}>
          <ToDoListItem
            label={item.label}
            important={item.important}
            done={item.done}
            handleDelete={() => handleDelete(item.id)}
            handleDone={() => handleDone(item.id)}
            handleImportant={() => handleImportant(item.id)}
          />
        </li>
      ))}
    </ul>
  );
};
export default ToDoList;

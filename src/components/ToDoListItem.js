import React, { Component } from "react";

class ToDoListItem extends Component {
  render() {
    const {
      label,
      important,
      done,
      handleDone,
      handleImportant,
      handleDelete
    } = this.props;
    let classes = "todo-item";
    if (done) {
      classes += " done";
    }
    if (important) {
      classes += " important";
    }
    return (
      <span>
        <span onClick={handleDone} className={classes}>
          {label}
        </span>
        <button onClick={handleImportant}>Important</button>
        <button onClick={handleDelete}>Delete</button>
      </span>
    );
  }
}
export default ToDoListItem;

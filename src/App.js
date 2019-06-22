import React, { Component } from "react";
import ToDoList from "./components/ToDoList";
import AddToDoItem from "./components/AddToDoItem";
import ToDoFilters from "./components/ToDoFilters";
import ToDoSearch from "./components/ToDoSearch";
import AppHeader from "./components/AppHeader";
import uuid from "uuid";

import "./App.css";

class App extends Component {
  state = {
    todos: [
      { id: 1, label: "Make nice coffee", important: false, done: false },
      { id: 2, label: "Create react app", important: true, done: false },
      { id: 3, label: "Learn redux", important: false, done: true }
    ],
    filter: "all",
    term: ""
  };
  handleDone = id => {
    this.setState(({ todos }) => {
      return {
        todos: this.toggleItemProp(todos, id, "done")
      };
    });
  };
  handleImportant = id => {
    this.setState(({ todos }) => {
      return {
        todos: this.toggleItemProp(todos, id, "important")
      };
    });
  };
  toggleItemProp = (arr, id, prop) => {
    const inx = arr.findIndex(item => item.id === id);
    const newItem = arr[inx];
    const newItemObj = { ...newItem, [prop]: !newItem[prop] };
    const newArray = [...arr.slice(0, inx), newItemObj, ...arr.slice(inx + 1)];
    return newArray;
  };
  handleDelete = id => {
    const newArray = this.state.todos.filter(item => item.id !== id);
    this.setState({
      todos: newArray
    });
  };
  generateNewItem = label => {
    return {
      id: uuid(),
      label,
      important: false,
      done: false
    };
  };
  addToDoItem = label => {
    const newArray = [...this.state.todos, this.generateNewItem(label)];
    this.setState({
      todos: newArray
    });
  };
  filter = (arr, filter) => {
    switch (filter) {
      case "all":
        return arr;
      case "done":
        return arr.filter(item => item.done);
      case "active":
        return arr.filter(item => !item.done);
      default:
        return arr;
    }
  };
  getFilter = filter => {
    this.setState({
      filter
    });
  };
  getTerm = term => {
    this.setState({
      term
    });
  };
  search = (arr, term) => {
    if (term.length === 0) {
      return arr;
    }
    return arr.filter(
      item => item.label.toLowerCase().indexOf(term.toLowerCase()) > -1
    );
  };
  render() {
    const { todos, filter } = this.state;
    const visibleItems = this.search(
      this.filter(todos, filter),
      this.state.term
    );
    const done = todos.filter(item => item.done).length;
    const todo = todos.length - done;
    return (
      <div className="App">
        <AppHeader done={done} todo={todo} />
        <ToDoSearch getTerm={this.getTerm} />
        <ToDoFilters getFilter={this.getFilter} filters={this.state.filter} />
        <ToDoList
          todos={visibleItems}
          handleDone={this.handleDone}
          handleImportant={this.handleImportant}
          handleDelete={this.handleDelete}
        />
        <AddToDoItem addToDoItem={this.addToDoItem} />
      </div>
    );
  }
}

export default App;

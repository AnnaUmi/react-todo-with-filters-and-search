import React, { Component } from "react";
class AddToDoItem extends Component {
  state = {
    value: ""
  };
  onSubmit = e => {
    e.preventDefault();
    this.props.addToDoItem(this.state.value);
    this.setState({
      value: ""
    });
  };
  onLabelChange = e => {
    this.setState({
      value: e.target.value
    });
  };
  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <input
          type="text"
          placeholder="add new todo"
          onChange={this.onLabelChange}
          value={this.state.value}
        />
        <button>Add</button>
      </form>
    );
  }
}
export default AddToDoItem;

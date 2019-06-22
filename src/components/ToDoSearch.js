import React, { Component } from "react";

class ToDoSearch extends Component {
  state = {
    term: ""
  };
  handleSearch = e => {
    const term = e.target.value;
    this.setState({
      term
    });
    this.props.getTerm(term);
  };
  render() {
    return (
      <div className="search-panel">
        <input
          type="text"
          placeholder="find todo"
          onChange={this.handleSearch}
          value={this.state.term}
        />
      </div>
    );
  }
}
export default ToDoSearch;

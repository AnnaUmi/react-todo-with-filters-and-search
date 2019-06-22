import React, { Component } from "react";

class ToDoFilters extends Component {
  state = {
    filter: ""
  };
  render() {
    const btns = [
      { label: "All", name: "all" },
      { label: "Done", name: "done" },
      { label: "Active", name: "active" }
    ];

    return btns.map(btn => {
      let isActive = this.props.filters === btn.name;
      let classes = "btn";
      if (isActive) {
        classes += " active";
      }
      return (
        <button
          className={classes}
          onClick={() => this.props.getFilter(btn.name)}
          key={btn.name}
        >
          {btn.label}
        </button>
      );
    });
  }
}
export default ToDoFilters;

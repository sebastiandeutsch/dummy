import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Todo extends Component {
  static propTypes = {
    todo: PropTypes.shape({
      title: PropTypes.string.isRequired,
      done: PropTypes.bool.isRequired
    }).isRequired
  };

  handleTodoClick = (event) => {
    const target = event.currentTarget;
    const index = parseInt(target.dataset.index);

    this.props.onToggleTodo(index);
  };

  handleDeleteClick = (event) => {
    console.log("delete");
  }

  render() {
    let className;
    if (this.props.todo.done) {
      className = "done";
    } else {
      className = "";
    }

    return (
      <li className={className}>
        <span data-index={this.props.index} onClick={this.handleTodoClick}>{this.props.todo.title}</span>
        <button onClick={this.handleDeleteClick}>delete</button>
      </li>
    );
  }
}

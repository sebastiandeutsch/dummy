import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class AddTodoForm extends Component {
  static defaultProps = {
    placeholder: "todo"
  };

  static propTypes = {
    onAddTodo: PropTypes.func.isRequired,
    placeholder: PropTypes.string
  };

  handleAddTodoClick = (event) => {
    console.log(event);

    const todo = {
      title: this.refs.todo.value,
      done: false
    };

    this.props.onAddTodo(todo);
  };

  render() {
    return(
      <div>
        <input ref="todo" type="text" placeholder={this.props.placeholder} />
        <button onClick={this.handleAddTodoClick}>Todo hinzufügen</button>
      </div>
    );
  }
}

import React, { Component } from 'react';
import './App.css';

import AddTodoForm from './AddTodoForm';
import TodoList from './TodoList';
import Todo from './Todo';
import Container from './Container';
import { inject, observer } from 'mobx-react';

@inject('TodoStore')
@observer
class App extends Component {
  handleAddTodo = (todo) => {
    this.props.TodoStore.addTodo(todo);
  };

  handleToggleTodo = (index) => {
    this.props.TodoStore.toggleTodo(index);
  };

  render() {
    return (
      <Container>
        <AddTodoForm onAddTodo={this.handleAddTodo} />
        <TodoList>
          {this.props.TodoStore.todos.map((todo, index) => {
            return (
              <Todo key={index} todo={todo} index={index} onToggleTodo={this.handleToggleTodo} />
            )
          })}
        </TodoList>
      </Container>
    );
  }
}

export default App;

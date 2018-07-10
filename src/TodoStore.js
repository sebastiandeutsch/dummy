import { observable } from "mobx";

class TodoStore {
  @observable todos = [];

  addTodo(todo) {
    this.todos.push(todo);
  }

  toggleTodo = (index) => {
    this.todos[index].done = !this.todos[index].done;
  };
}

export default new TodoStore();

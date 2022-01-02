import { Todo, Todos } from "./structure";

export default class TodoPresenter {
  createIndex;
  todos;
  constructor(todos: Todos) {
    this.todos = todos;
    this.createIndex = todos.length + 1;
  }

  getTodos() {
    return this.todos;
  }

  addTodo(text: string, update: Function) {
    this.todos = [...this.todos, { text, id: this.createIndex++, done: false }];
    update(this.todos);
  }
}

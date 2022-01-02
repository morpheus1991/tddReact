import { Todos } from "../structure";
import TodoPresenter from "../todos_presenter";

describe("TodoPresenter", () => {
  const todos: Todos = [
    { id: 0, text: "ddd", done: false },
    { id: 1, text: "aaaa", done: false },
  ];
  let presenter: TodoPresenter;
  beforeEach(() => {
    presenter = new TodoPresenter(todos);
  });

  it("inits with todos", () => {
    expect(presenter.getTodos()).toEqual(todos);
  });
});

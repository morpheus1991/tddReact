import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";
import TodoPresenter from "./todos_presenter";
const todoPresenter = new TodoPresenter([]);
test("renders learn react link", () => {
  render(<App presenter={todoPresenter} />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

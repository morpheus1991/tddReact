import React, {
  useState,
  useRef,
  ChangeEventHandler,
  ChangeEvent,
} from "react";
import logo from "./logo.svg";
import "./App.css";
import { Todos } from "./structure";
import TodoPresenter from "./todos_presenter";

interface Props {
  presenter: TodoPresenter;
}
function App({ presenter }: Props) {
  const [todo, setTodo] = useState<Todos>(presenter.getTodos());
  const [inputValue, setInputValue] = useState("");

  const addTodo = (text: string) => {
    presenter.addTodo(text, setTodo);
  };

  return (
    <div className="App">
      <div>
        <form
          action="subtmit"
          onSubmit={(e) => {
            e.preventDefault();
            addTodo(inputValue);
          }}
        >
          <input
            type="text"
            onChange={(e) => {
              setInputValue(e.target.value);
            }}
          />
          <button type="submit">추가</button>
        </form>
        <ul>
          {todo.map((item) => (
            <li key={item.id}>{item.text}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;

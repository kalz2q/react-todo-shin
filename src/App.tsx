import React from 'react';
import './App.css';
const { useState } = React;

function App() {
  // const [inputValue, setInputValue] = useState("おｋ");
  // const [todos, setTodos] = useState<Todo[]>(ITEMS);
  const todos = ITEMS;

  type Todo = {
    id: number,
    title: string,
    body: string
  }
  return (
    <div className="App">
      <div>
        <h2>todo with map</h2>
        <ul className="todoList">
          {todos.map((todo) => (
            <li key={todo.id}>
              <p>{todo.title}</p>
              <p>{todo.body}</p>
            </li>
          ))}
        </ul>
      </div>

    </div>
  );
}

const ITEMS = [
  {
    id: 1,
    title: "一番最初のタイトルが入ります",
    body: "おっとテキストが入りますテキストが入りますテキストが入ります"
  },
  {
    id: 2,
    title: "2番目のタイトルが入ります",
    body: "テキストが入テ".concat("\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0キストが 入りますテキスト").concat("\xa0".repeat(20)).concat("が入ります")
  },
  {
    id: 3,
    title: "3番目のタイトルが入ります",
    body: "テキストが入ります\xa0\xa0\xa0\xa0テキストが入りますテキストが入ります"
  },
]

export default App;

import React from 'react';
import './App.css';
const { useState } = React;

function App() {
  const [inputValue, setInputValue] = useState("");
  const [todos, setTodos] = useState<Todo[]>([]);

  type Todo = {
    inputValue: string;
    id: number
  }

  // const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  const handleChange = (e: any) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (inputValue !== "") {
      const newTodo: Todo = {
        inputValue: inputValue,
        id: todos.length
      };
      // setTodos([newTodo, ...todos]);
      setTodos(todos.concat(newTodo));
      setInputValue("");
      console.log(todos);
    }
  }

  return (
    <div className="App">
      <div>
        <h2>todo with map</h2>

        <form onSubmit={(e) => handleSubmit(e)}>
          <input type="text"
            autoFocus={true}
            value={inputValue}
            onChange={(e) => handleChange(e)}
            className="inputText" />
          <input type="submit" value="submit" className="submitButton" />
        </form>
        <ul className="todoList">
          {todos.map((todo) => (
            <li key={todo.id}>
              {todo.inputValue}
            </li>
          ))}
        </ul>
      </div>

    </div>
  );
}

export default App;

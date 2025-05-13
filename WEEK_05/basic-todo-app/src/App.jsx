import { useState } from "react";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([
    {
      title: "Go to gym",
      description: "Go to gym from 7-9",
      complete: false,
    },
    {
      title: "Study DSA",
      description: "Study DSA from 9-11",
      complete: true,
    },
  ]);

  const addTodo = () => {
    setTodos([
      ...todos,
      {
        title: "new todo",
        description: "desc of new todo",
      },
    ]);

    // let newTodos = [];
    // for(let i = 0; i <= todos.length; i++) {
    //   newTodos.push(todos[i])
    // }

    // newTodos.push({
    //   title: "new todo",
    //   description: "desc of new todo"
    // })

    // setTodos(newTodos)

  };

  return (
    <>
      <button onClick={addTodo}>Add random todo</button>
      {todos.map((todo) => {
        return <Todos title={todo.title} description={todo.description} />;
      })}
    </>
  );
}

const Todos = (props) => {
  return (
    <>
      <h1>{props.title}</h1>
      <h2>{props.description}</h2>
    </>
  );
};

export default App;

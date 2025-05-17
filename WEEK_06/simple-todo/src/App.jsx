import { useState } from "react";

const App = () => {
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: "Go to gym",
      description: "Go to gym from 7-9",
    },
    {
      id: 2,
      title: "Study DSA",
      description: "Study DSA from 9-11",
    },
    {
      id: 3,
      title: "Go to class",
      description: "Go to class from 11-2",
    },
  ]);

  const addTodo = () => {
    // let newTodo = []
    // for(let i = 0; i < todos.length; i++) {
    //   newTodo.push(todos[i])
    // }
    // newTodo.push({
    //   id: 4,
    //   title: Math.random(),
    //   description: Math.random()
    // })
    // setTodos(newTodo)

    setTodos([
      ...todos,
      {
        id: todos.length + 1,
        title: Math.random().toString(),
        description: Math.random().toString(),
      },
    ]);
  };

  return (
    <>
      <button onClick={addTodo}>Add a new todo</button>
      {todos.map((todo) => (
        <Todo key={todo.id} title={todo.title} description={todo.description} />
      ))}
    </>
  );
};

const Todo = ({ title, description }) => {
  return (
    <>
      <h1>{title}</h1>
      <h5>{description}</h5>
    </>
  );
};

export default App;

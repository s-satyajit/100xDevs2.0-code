import { useEffect } from "react";
import { useState } from "react";

function App() {
  const [id, setId] = useState(1);

  return (
    <>
      <button
        onClick={() => {
          setId(id+1);
        }}
      >
        Next
      </button>
      <Todo id={id} />
    </>
  );
}

const Todo = ({ id }) => {
  const [todo, setTodo] = useState({});

  useEffect(() => {
    const fetchTodo = async () => {
      const response = await fetch(`http://localhost:8080/todo/${id}`);
      if (!response.ok) throw new Error(response.statusText);
      const data = await response.json();
      setTodo(data);
    };
    fetchTodo();
  }, [id]);

  return (
    <>
      <h1>{todo.title}</h1>
      <h4>{todo.description}</h4>
    </>
  );
};

export default App;

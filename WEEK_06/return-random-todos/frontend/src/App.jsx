import { useEffect, useState } from "react";

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    setInterval(() => {
      fetchTodos();
    }, [10000]);
    const fetchTodos = async () => {
      try {
        const response = await fetch(`http://localhost:8080/random-todos`);
        if (!response.ok) throw new Error(response.statusText);
        const data = await response.json();
        setTodos(data.todos);
      } catch (err) {
        console.error(`Failed to fetch todos`, err);
      }
    };
  }, []);

  return (
    <>
      {todos.map((todo) => {
        return (
          <RenderTodo
            key={todo.id}
            title={todo.title}
            description={todo.description}
          />
        );
      })}
    </>
  );
}

const RenderTodo = ({ title, description }) => {
  return (
    <div style={{ padding: "10px", margin: "10px", border: "1px solid black" }}>
      <h1>{title}</h1>
      <h4>{description}</h4>
    </div>
  );
};

export default App;

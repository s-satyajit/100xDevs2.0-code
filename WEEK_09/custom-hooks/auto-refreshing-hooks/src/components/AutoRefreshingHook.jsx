import { useState, useEffect } from "react";
import axios from "axios";

export const useAutoRefreshingTodo = (n) => {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const value = setInterval(() => {
      axios.get(`http://localhost:8080/random-todos`).then((res) => {
        setTodos(res.data.todos);
        setLoading(false);
      });
    }, n * 1000);

    // axios.get(`http://localhost:8080/random-todos`).then((res) => {
    //   setTodos(res.data.todos);
    //   setLoading(false);
    // });

    return () => {
      clearInterval(value);
    };
  }, [n]);

  return { todos, loading };
};

import { useState, useEffect } from "react"
import axios from 'axios'

const App = () => {

  const [id, setId] = useState(1)
  const buttonArr = [1, 2, 3, 4, 5]

  return (
    <>
      {buttonArr.map((n) => <button key={n} onClick={() => setId(n)}>{n}</button>)}
      <Todo id={id} />
    </>
  )
}

const Todo = ({id}) => {
  const [todo, setTodo] = useState({})

  useEffect(() => {
    fetchTodo()
  }, [id])

  const fetchTodo = async () => {
    const {data} = await axios.get(`http://localhost:8080/todo?id=${id}`)
    setTodo(data)
  }

  return (
    <div style={{padding: "10px", margin: "10px", border: "10px solid black"}}>
      <h1>{todo.title}</h1>
      <h4>{todo.description}</h4>
    </div>
  )
}

export default App;
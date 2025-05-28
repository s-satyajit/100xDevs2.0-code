import { Todo } from "./components/RenderTodo"
import { TODOS } from "./components/todos"
import { UpdateTodo } from "./components/UpdateTodo";

const App = () => {
  return (
    <>
      <UpdateTodo />
      {TODOS.map((t) => (
        <Todo key={t.id} id={t.id}/> 
      ))}
    </>
  )
}

export default App;
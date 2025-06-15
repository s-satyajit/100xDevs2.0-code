import { useAutoRefreshingTodo } from "./components/AutoRefreshingHook";
import { TrackTodo } from "./components/TrackTodo";

export default function App() {
  const {todos, loading} = useAutoRefreshingTodo(10)

  if(loading) return <div>Loading...</div>
  return (
    <>
      {todos.map((todo) => <TrackTodo key={todo.id} todoElement={todo} />)}
    </>
  )
}


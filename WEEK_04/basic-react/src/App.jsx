import { useState } from "react"
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <button onClick={()=> setCount((count) => count + 1)}>
        Count is {count}
      </button>
    </div>
  )
}

export default App

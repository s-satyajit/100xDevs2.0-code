import { useContext, useState } from "react"
import { CountContext } from "./context"

const App = () => {

  const [count, setCount] = useState(0)

  return (
    <>
      <CountContext.Provider value={{count, setCount}}>
        <Count />
      </CountContext.Provider>
    </>
  )
}

const Count = () => {
  const {count} = useContext(CountContext)
  return (
    <>
      {count} <br/> <br/>
      <Button />
    </>
  )
}

const Button = () => {
  const {count, setCount} = useContext(CountContext)
  return (
    <>
      <button onClick={() => setCount(count + 1)}>Increase</button>
      <button onClick={() => setCount(count - 1)}>Decrease</button>
    </>
  )
}

export default App;

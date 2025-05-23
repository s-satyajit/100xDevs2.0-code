import { useState } from "react";

const App = () => {

  const [count, setCount] = useState(0)

  return (
    <>
      <Count countProp={count} setCountProp={setCount}  />
    </>
  )
}

const Count = ({countProp, setCountProp}) => {
  return (
    <>
      {countProp} <br/> <br/>
      <Button renamedCountProp={countProp} renamedSetCountProp={setCountProp} />
    </>
  )
}

const Button = ({renamedCountProp, renamedSetCountProp}) => {
  return (
    <>
      <button onClick={() => renamedSetCountProp(renamedCountProp + 1)} >Increase</button>
      <button onClick={() => renamedSetCountProp(renamedCountProp - 1)} >Decrease</button>
    </>
  )
}

export default App;
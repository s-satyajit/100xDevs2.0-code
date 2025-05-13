import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <CustomButton count={count} setCount={setCount}></CustomButton>
      <CustomButton count={count + 1} setCount={setCount}></CustomButton>
      <CustomButton count={count - 1} setCount={setCount}></CustomButton>
      <CustomButton count={count * 100} setCount={setCount}></CustomButton>
    </div>
  );
}

const CustomButton = (props) => {

  const onClickHandler = () => {
    props.setCount(props.count + 1)
  }

  return (
    <button onClick={onClickHandler}>Counter: {props.count}</button>
  )
}


export default App;

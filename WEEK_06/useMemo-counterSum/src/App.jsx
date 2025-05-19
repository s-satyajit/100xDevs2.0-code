import { useState, useMemo } from "react";

const App = () => {
  const [inputValue, setInputValue] = useState(1);
  const [counter, setCounter] = useState(0);

  let total = 0;
  const sum = useMemo(() => {
    for (let i = 0; i <= inputValue; i++) {
      total += i;
    }
    return total;
  }, [inputValue]);

  return (
    <>
      <input type="number" onChange={(e) => setInputValue(e.target.value)} />{" "}
      <br />
      <p>
        Sum from 1 to {inputValue} is {sum}
      </p>
      <button onClick={() => setCounter((c) => c + 1)}>
        Counter ({counter})
      </button>
    </>
  );
};

export default App;

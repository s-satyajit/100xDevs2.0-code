import { useState, memo, useCallback } from "react";

const App = () => {
  const [count, setCount] = useState(0);

  const inputFn = useCallback(() => {
    console.log(`Function occured`);
  }, []);

  return (
    <>
      <button onClick={() => setCount((c) => c + 1)}>
        counter button {count}
      </button>{" "}
      <br /> <br />
      <ButtonComponent anyProp={inputFn} />
    </>
  );
};

const ButtonComponent = memo(({ anyProp }) => {
  console.log(`Render child`);

  return (
    <>
      <button onClick={anyProp}>Click button</button>
    </>
  );
});

export default App;

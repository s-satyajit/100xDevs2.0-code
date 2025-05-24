import { countAtom } from "./store/atoms/count";
import { useRecoilState, useRecoilValue } from "recoil";

function App() {
  return (
    <>
      <Count />
    </>
  );
}

const Count = () => {
  const count = useRecoilValue(countAtom);
  return (
    <>
      {count} <br /> <br />
      <Button />
    </>
  );
};

const Button = () => {
  const [count, setCount] = useRecoilState(countAtom);
  return (
    <>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
    </>
  );
};

export default App;

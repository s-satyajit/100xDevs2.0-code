import { countAtom, selectorAtom } from "./store/atoms/count";
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
      <EvenCountRenderer />
      <Button /> 
    </>
  );
};

const EvenCountRenderer = () => {
  const count = useRecoilValue(countAtom)
  // const isEven = useMemo(() => {
  //   return count % 2 == 0
  // }, [count])
  const isEven = useRecoilValue(selectorAtom)
  return (
    <div>
      {/* {(count % 2 == 0) ? "It is even" : null} */}
      {isEven ? "It is even" : "It is odd"}
    </div>
  )
}

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

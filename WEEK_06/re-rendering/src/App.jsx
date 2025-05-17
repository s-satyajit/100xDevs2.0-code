import { useState, memo } from "react";

function App() {
  const [rerender, setRerender] = useState("My name is Satyajit");

  const changeTitle = () => {
    setRerender(`My name is ${Math.random()}`);
  };

  return (
    <>
      <button onClick={changeTitle}>Click me to change the title</button>
      <Header title={rerender} />
      <Header title="Hello world" />
      <Header title="Hello world" />
      <Header title="Hello world" />
      <Header title="Hello world" />
      <Header title="Hello world" />
    </>
  );
}

const Header = memo(({ title }) => {
  console.log(`Rendering Header: ${title}`);
  return (
    <>
      <h1>{title}</h1>
    </>
  );
});

export default App;

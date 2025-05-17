import { useState } from "react";

function App() {
  return (
    <>
      <HeaderWithButton />
      <Header title="My name is Satyajit" />
    </>
  );
}

const HeaderWithButton = () => {
  const [reRender, setReRender] = useState("Harkirat");

  const updateTitle = () => {
    setReRender(Math.random());
  };
  return (
    <>
      <button onClick={updateTitle}>Click to change the title</button>
      <h1>My name is {reRender}</h1>
    </>
  );
};

const Header = ({ title }) => {
  return (
    <>
      <h1>{title}</h1>
    </>
  );
};

export default App;

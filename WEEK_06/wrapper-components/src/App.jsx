const App = () => {
  return (
    <div style={{ display: "flex", justifyContent: "flex-end" }}>
      <CardWrapper>
        <h1>Hi there</h1>This is first card
      </CardWrapper>
      <div>
        <CardWrapper>This is second Card</CardWrapper>
      </div>
      <CardWrapper>
        <TextComponent />
      </CardWrapper>

      <CardWrapper innerComponent={<AnotherTextComponent />} />
    </div>
  );
};

const TextComponent = () => {
  return <h1>Hi this is text component</h1>;
};

const AnotherTextComponent = () => {
  return <h1>Hi this is another text component</h1>;
};

const CardWrapper = ({ children, innerComponent }) => {
  return (
    <div style={{ border: "1px solid black", padding: "10px", margin: "10px" }}>
      {children}
      {innerComponent}
    </div>
  );
};

export default App;

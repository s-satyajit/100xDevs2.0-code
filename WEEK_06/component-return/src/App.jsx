function App() {
  

  return (
    <>
      <Header title="Hello my name is Harkirat" />
      <Header title="Hello my name is Satyajit" />
    </>
  )
}

const Header = ({title}) => {
  return (
    <>
    <div>
      {title}
    </div>
    
    </>
  )
}

export default App

import { useState, useEffect } from "react"

function App() {
  const [render, setRender] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setRender(false)
    }, 10000)
  }, [])

  return (
    <>
      {render ? <MyComponent /> : <div></div>}
    </>
  )
}

const MyComponent = () => {

  useEffect(() => {
    // Perform setup or data fetching here
    console.log("Component mounted")
    return () => {
        console.log("Component unmount")
    }
  }, [])

  return (
    <div>From inside my component</div>
  )
}

export default App

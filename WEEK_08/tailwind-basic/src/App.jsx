
function App() {

  return (
    <>
      <div style={{display: "flex", justifyContent: "space-around"}}>
        <div style={{backgroundColor: "blue"}}>hi</div>
        <div style={{backgroundColor: "red"}}>hi</div>
        <div style={{backgroundColor: "green"}}>hi</div>
        <div style={{backgroundColor: "red"}}>hi</div>
      </div>
      <div className="flex justify-between">
        <div className="bg-blue-500">hi</div>
        <div className="bg-red-500">hi</div>
        <div sclassName="bg-green-500">hi</div>
        <div className="bg-red-500">hi</div>
      </div>
      <div className="grid grid-cols-7 gap-2">
        <div className="bg-green-500"> hi</div>
        <div className="bg-yellow-500">hi</div>
        <div className="bg-red-500">hi</div>
        <div className="bg-yellow-500">hi</div>
        <div className="bg-yellow-500">hi</div>
        <div className="bg-yellow-500">hi</div>
        <div className="bg-yellow-500 ">hi</div>
        <div className="bg-yellow-500">hi</div>
      </div>

      <div className="grid grid-cols-10">
        <div className="bg-green-500 col-span-4">hi</div>
        <div className="bg-red-500 col-span-4">hi</div>
        <div className="bg-blue-500 col-span-2">hi</div>
      </div>
      <div className="flex">
        <div className="bg-green-500 w-[40%]">hi</div>
        <div className="bg-red-500 w-[40%]">hi</div>
        <div className="bg-blue-500 w-[20%]">hi</div>
      </div>

      <div className="bg-red-500 md:bg-blue-500">
        <h1>Hi there</h1>
      </div>
      <div className="bg-red-500 md:bg-blue-500 lg:bg-yellow-500">
        <h1>Hi there</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <div className="bg-blue-500 md:col-span-1">hi</div>
        <div className="bg-red-500 md:col-span-1">hi</div>
        <div className="bg-green-500 md:col-span-1">hi</div>
      </div>
    </>
  )
}

export default App

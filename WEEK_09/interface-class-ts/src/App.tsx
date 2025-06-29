interface Person {
  name: string;
  age: number;
  greet: (phrase: string): void;
}

class Employee implements Person {
  name: string;
  age: number;

  constructor(n: string, a: number) {
    this.name = n
    this.age = a
  }

  greet(phrase: string) {
    console.log(`Name is: ${this.name}, ${phrase}`)
  }
}

function App() {

  return (
    <>
      
    </>
  )
}

export default App

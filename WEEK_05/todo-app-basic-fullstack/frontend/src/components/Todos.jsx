import { useState } from "react"

export const Todos = () => {

    const [todos, setTodos] = useState([])

    fetch(`http://localhost:8080/todos`, {
        "method": "GET",
    })
        .then((res) => res.json())
        .then((data) => setTodos(data.todos))

    return (
        <>
        {todos.map(todo => {
            return (
                <div >

                    <h1>{todo.title}</h1>
                    <h2>{todo.description}</h2>
                    <button>{todo.complete === true ? "Completed" : "Mark as completed"}</button>
                </div>
                
            )
        })}
        
        </>
    )
}
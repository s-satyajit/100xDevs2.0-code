import { useState } from "react"

export const CreateTodo = () => {

    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")

    return (
        <>
            <input style={{padding: 5, margin: 5}} type="text" placeholder="Enter title" onChange={(e) => setTitle(e.target.value)} /> <br></br>
            <input style={{padding: 5, margin: 5}} type="text" placeholder="Enter description" onChange={(e) => setDescription(e.target.value)} /> <br></br>
            <button style={{padding: 5, margin: 5}} onClick={() => {
                fetch(`http://localhost:8080/todo`, {
                    method: "POST",
                    body: JSON.stringify({
                        title: title,
                        description: description
                    }),
                    headers: {
                        "Content-type": "application/json"
                    }
                })
                .then(async (res) => {
                    const json = await res.json()
                    alert("Todo created")
                })
            }}>Add todo</button>
        </>
    )
}
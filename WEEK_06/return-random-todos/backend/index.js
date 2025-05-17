import express from 'express'
import cors from 'cors'

const app = express()
app.use(cors())
app.use(express.json())

const generateRandomTodos = () => {
    const verbs = ["code", "learn", "write", "eat", "drive", "hustle", "run", "attend"]
    const objects = ["a program", "some rice", "in healthy manner", "harder as hell", "as long as you can", "for yourself"]
    const otherVerbs = ["waiting for", "playing with some", "burning the", "climbing the", "passing on the"]
    const otherObjects = ["a coffee", "video games", "calories", "steps ahead", "test cases"]
    const conjuctions = ["and", "while", "with", "even if you are", "not only"]
    const todos = []


    const count = Math.floor(Math.random() * 6) + 1

    for(let i = 0; i <= count; i++) {
        const verb = verbs[Math.floor(Math.random() * verbs.length)]
        const object = objects[Math.floor(Math.random() * objects.length)]
        const anotherVerb = otherVerbs[Math.floor(Math.random() * otherVerbs.length)]
        const anotherObject = otherObjects[Math.floor(Math.random() * otherObjects.length)]
        const conjuction = conjuctions[Math.floor(Math.random() * conjuctions.length)]

        todos.push({
            id: i,
            title: `${verb} ${object}`,
            description: `${verb} ${object} ${conjuction} ${anotherVerb} ${anotherObject}`
        })
    }
    return todos
}

app.use('/random-todos', (req, res) => {
    const list = generateRandomTodos()
    res.json({todos: list})
})

app.listen(8080, () => {
    console.log(`Server running on port: ${8080}`)
})
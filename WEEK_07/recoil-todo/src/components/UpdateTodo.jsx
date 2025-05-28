import { useSetRecoilState } from "recoil"
import { todosAtomFamily } from "../store/atoms/todo"
import { useEffect } from "react"

export const UpdateTodo = () => {
    const todoUpdater = useSetRecoilState(todosAtomFamily(2))
    useEffect(() => {
        setTimeout(() => {
            todoUpdater({
                id: 2,
                title: 'new Todo',
                description: 'new Todo Description'
            })
        }, 5000)
    }, [])

    return (
        <>

        </>
    )
}
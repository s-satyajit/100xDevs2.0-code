import {useRecoilValue, useRecoilValueLoadable} from 'recoil'
import {todoAtomFamily} from '../store/atoms/todo'

export const Todo = ({id}) => {
    const currentTodo = useRecoilValue(todoAtomFamily(id))
    return (
        <>
            {currentTodo.title} <br/>
            {currentTodo.description}
        </>
    )
}
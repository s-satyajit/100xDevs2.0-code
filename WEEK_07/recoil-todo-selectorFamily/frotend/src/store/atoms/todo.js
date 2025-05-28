import {atomFamily, selectorFamily} from 'recoil'
import axios from 'axios'

export const todoAtomFamily = atomFamily({
    key: 'todoAtomFamily',
    default: selectorFamily({
        key: 'todoAtomFamilySelector',
        get: (id) => async ({get}) => {
            const {data} = await axios.get(`http://localhost:8080/todos?id=${id}`)
            return data.todo
        }
    })
})
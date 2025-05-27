import {atom, selector} from 'recoil'

export const countAtom = atom({
  key: 'atomCount',
  default: 0
})

export const selectorAtom = selector({
  key: 'atomSelector',
  get: ({get}) => {
    const count = get(countAtom)
    return count % 2
  }
})
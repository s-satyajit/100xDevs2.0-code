import {atom} from 'recoil'

export const countAtom = atom({
  key: 'atomCount',
  default: 0
})
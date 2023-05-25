import { atom } from 'recoil';

export const loginStateAtom = atom({
  key: 'loginState',
  default: false,
});

export const selectedTabAtom = atom({
  key: 'selectedTabAtom',
  default: '-1',
});

import { create } from 'zustand';

type ListMode = 'PRACTICE' | 'LEARNING';

type State = {
  checkedLevel5: boolean,
  checkedLevel4: boolean,
  checkedLevel3: boolean,
  showMeaning: boolean,
  isRandomList: boolean,
  listMode: ListMode,
}

type Action = {
  changeCheckedLevel5: () => void,
  changeCheckedLevel4: () => void,
  changeCheckedLevel3: () => void,
  changeShowMeaning: (value: boolean) => void,
  changeToRandomList: (value: boolean) => void,
  changeListMode: (listMode: State['listMode']) => void
}

export const lookAndLearnOptionsStore = create<State & Action>((set) => ({
  checkedLevel5: true,
  checkedLevel4: true,
  checkedLevel3: true,
  showMeaning: false,
  isRandomList: false,
  listMode: 'LEARNING',
  changeCheckedLevel5: () => set((state) => ({ ...state, checkedLevel5: !state.checkedLevel5 })),
  changeCheckedLevel4: () => set((state) => ({ ...state, checkedLevel4: !state.checkedLevel4 })),
  changeCheckedLevel3: () => set((state) => ({ ...state, checkedLevel3: !state.checkedLevel3 })),
  changeShowMeaning: (value) => set((state) => ({ ...state, showMeaning: value })),
  changeToRandomList: (value) => set((state) => ({ ...state, isRandomList: value })),
  changeListMode: (listMode) => set((state) => ({ ...state, listMode })),
}))
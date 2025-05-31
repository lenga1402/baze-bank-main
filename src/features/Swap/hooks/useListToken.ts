import { create } from "zustand"

import { type IToken } from "../types"

type State = {
  value: IToken[]
}

type Action = {
  setValue: (value: State["value"]) => void
}

export const useListToken = create<State & Action>((set) => ({
  value: [],
  setValue: (value) => set(() => ({ value })),
}))

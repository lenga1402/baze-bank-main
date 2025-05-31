import { create } from "zustand"

import { type IToken } from "../../types"

type State = {
  value?: IToken
}

type Action = {
  setValue: (value: State["value"]) => void
}

export const useTokenTo = create<State & Action>((set) => ({
  setValue: (value) => set(() => ({ value })),
}))

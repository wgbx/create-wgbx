import { defineStore } from 'pinia'

interface AppState {
  count: number
}

export const useAppStore = defineStore({
  id: 'app',
  state: (): AppState => ({
    count: 0
  }),
  actions: {
    setCount(count: number) {
      this.count = count
    }
  }
})

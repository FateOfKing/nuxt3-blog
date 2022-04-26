import { defineStore } from 'pinia'

// useStore 可以任意，比如 useUser, useCart
// 参数1是整个应用中唯一的store id
export const useStore = defineStore('counter', {
  state() {
    return {
      count: 100
    }
  },
})
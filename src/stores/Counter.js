import { defineStore } from 'pinia'

export const useCounter = defineStore('counter', {
  state(){
    return {
      count:0
    }
  },

  actions: {
    increment(){
      this.count++
    },
    decrease(){
      this.count--
    }
  },

  getters:{
    showCount(){
      return 'The value of count is: '+this.count
    }
  }

})


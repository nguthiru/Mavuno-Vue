import { createStore } from 'vuex'
import auth from './auth'
import bids from './bids'
export const store = createStore({
  state: {},
  getters:{},
  mutations:{},
  actions: {},
  modules:{
      auth,bids
  }
})

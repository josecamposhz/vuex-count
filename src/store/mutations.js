//import { set, toggle } from '@/utils/vuex'

export default {
  setDrawer (state, payload) {
    state.drawer = payload
  },
  incrementar (state) {
    state.count++
  },
  decrementar (state) {
    state.count--
  },
  multiplicar (state) {
    state.count *= 2
  },
  dividir (state) {
    state.count /= 2
  },
  reset (state) {
    state.count = 0
  },
  setUser (state, user) {
    state.user = user
  }
}
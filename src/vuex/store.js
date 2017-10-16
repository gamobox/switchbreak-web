import Vuex from 'vuex'
import Vue from 'vue'
import API from './API'
import { TOGGLE_MENU, CLOSE_MENU, GET_MEMBER } from './mutation-types'
import entries from './entries'

Vue.use(Vuex)

const state = {
  isMenuActive: false,
  members: []
}

const actions = {
  [TOGGLE_MENU]({ commit }) {
    commit(TOGGLE_MENU)
  },
  [CLOSE_MENU]({ commit }) {
    commit(CLOSE_MENU)
  }
}

const getters = {
  isMenuActive(_state) {
    return _state.isMenuActive
  }
}

const mutations = {
  [TOGGLE_MENU](_state) {
    Object.assign(_state, { isMenuActive: !_state.isMenuActive })
  },
  [CLOSE_MENU](_state) {
    Object.assign(_state, { isMenuActive: false })
  }
}

export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations,
  modules: {
    entries
  }
})

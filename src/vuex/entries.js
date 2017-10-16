import API from '@/vuex/API'
import { GET_ENTRIES, CLEAR_ENTRIES } from '@/vuex/mutation-types'

const state = {
  collection: [],
  shown: 0
}

const actions = {
  [CLEAR_ENTRIES]({ commit }) {
    commit(CLEAR_ENTRIES)
  },

  [GET_ENTRIES]({ commit }) {
    return new Promise((resolve, reject) => {
      axios.get(API.GISTS).then(res => {
        const urls = res.data.map(item => item.url)
        resolve(urls)
      })
    }).then(urls => {
      return Promise.all(
        urls.map(url => {
          return new Promise(resolve => {
            axios.get(url).then(res => resolve(res.data))
          })
        })
      ).then(data => {
        commit(GET_ENTRIES, data)
      })
    })
  }
}

const getters = {}

const mutations = {
  [CLEAR_ENTRIES](_state) {
    _state.collection = []
  },
  [GET_ENTRIES](_state, data) {
    _state.collection = _state.collection.concat(data)
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}

import firmService from '../../services/firmService'

const state = {
  firms: []
}

const getters = {
  firms: state => {
    return state.firms
  }
}

const actions = {
  getFirms ({ commit }) {
    firmService.fetchFirms()
    .then(firms => {
      commit('setFirms', firms)
    })
  },
  addFirm({ commit }, firm) {
    firmService.postFirm(firm)
    .then(() => {
      commit('addFirm', firm)
    })
  },
  deleteFirm( { commit }, id) {
    firmService.deleteFirm(id)
    commit('deleteFirm', id)
  }
}

const mutations = {
  setFirms (state, firms) {
    state.firms = firms
  },
  addFirm(state, firm) {
    state.firms.push(firm)
  },
  deleteFirm(state, id) {
    state.firms = state.firms.filter(obj => obj.id !== id)
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
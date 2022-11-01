import userService from '../../services/userService'

const state = {
  users: []
}

const getters = {
  users: state => {
    return state.users
  }
}

const actions = {
  getUsers ({ commit }) {
    userService.fetchUsers()
    .then(users => {
      commit('setUsers', users)
    })
  },
  addUser({ commit }, user) {
    userService.postUser(user)
    .then(() => {
      commit('addUser', user)
    })
  },
  deleteUser( { commit }, id) {
    userService.deleteUser(id)
    commit('deleteUser', id)
  }
}

const mutations = {
  setUsers (state, users) {
    state.users = users
  },
  addUser(state, user) {
    state.users.push(user)
  },
  deleteUser(state, id) {
    state.users = state.users.filter(obj => obj.id !== id)
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
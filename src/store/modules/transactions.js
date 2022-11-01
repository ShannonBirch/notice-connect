import transactionService from '../../services/transactionService'

const state = {
  transactions: []
}

const getters = {
  transactions: state => {
    return state.transactions
  }
}

const actions = {
  getTransactions ({ commit }) {
    transactionService.fetchTransactions()
    .then(transactions => {
      commit('setTransactions', transactions)
    })
  },
  addTransaction({ commit }, transaction) {
    transactionService.postTransaction(transaction)
    .then(() => {
      commit('addTransaction', transaction)
    })
  },
  deleteTransaction( { commit }, id) {
    transactionService.deleteTransaction(id)
    commit('deleteTransaction', id)
  }
}

const mutations = {
  setTransactions (state, transactions) {
    state.transactions = transactions
  },
  addTransaction(state, transaction) {
    console.log(transaction)
    state.transactions.push(transaction)
  },
  deleteTransaction(state, id) {
    state.transactions = state.transactions.filter(obj => obj.id !== id)
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
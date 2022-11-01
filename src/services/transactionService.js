import api from '@/services/api'


export default {
  fetchTransactions() {
    return api.get(`transactions/`)
              .then(response => response.data)
  },
  postTransaction(payload) {
    console.log(payload)
    return api.post(`transactions/`, payload)
              .then(response => response.data)
  },
  deleteTransaction(id) {
    return api.delete(`transactions/${id}`)
              .then(response => response.data)
  }
}
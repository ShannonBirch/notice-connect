import api from '@/services/api'


export default {
  fetchUsers() {
    return api.get(`users/`)
              .then(response => response.data)
  },
  postUser(payload) {
    console.log(payload)
    return api.post(`users/`, payload)
              .then(response => response.data)
  },
  deleteUser(id) {
    return api.delete(`users/${id}`)
              .then(response => response.data)
  }
}
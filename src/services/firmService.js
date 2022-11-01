import api from '@/services/api'


export default {
  fetchFirms() {
    return api.get(`firms/`)
              .then(response => response.data)
  },
  postFirm(payload) {
    return api.post(`firms/`, payload)
              .then(response => response.data)
  },
  deleteFirm(id) {
    return api.delete(`firms/${id}`)
              .then(response => response.data)
  }
}
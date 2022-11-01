import api from '@/services/api'


export default {
  fetchProducts() {
    return api.get(`products/`)
              .then(response => response.data)
  },
  postProduct(payload) {
    return api.post(`products/`, payload)
              .then(response => response.data)
  },
  deleteProduct(id) {
    return api.delete(`products/${id}`)
              .then(response => response.data)
  }
}
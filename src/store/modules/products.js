import productService from '../../services/productService'

const state = {
  products: []
}

const getters = {
  products: state => {
    return state.products
  }
}

const actions = {
  getProducts ({ commit }) {
    productService.fetchProducts()
    .then(products => {
      commit('setProducts', products)
    })
  },
  addProduct({ commit }, product) {
    productService.postProduct(product)
    .then(() => {
      commit('addProduct', product)
    })
  },
  deleteProduct( { commit }, id) {
    productService.deleteProduct(id)
    commit('deleteProduct', id)
  }
}

const mutations = {
  setProducts (state, products) {
    state.products = products
  },
  addProduct(state, product) {
    state.products.push(product)
  },
  deleteProduct(state, id) {
    state.products = state.products.filter(obj => obj.id !== id)
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
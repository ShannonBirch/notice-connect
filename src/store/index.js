import Vue from 'vue'
import Vuex from 'vuex'
import firms from './modules/firms'
import users from './modules/users'
import products from './modules/products'
import transactions from './modules/transactions'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    firms,
    users,
    products,
    transactions
  }
})
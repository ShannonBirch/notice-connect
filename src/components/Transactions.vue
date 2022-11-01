<template>
  <div class="hello">

    <p>Product</p>
    <select v-model="product">
        <option v-for="(product,index) in products" :key="index" v-html="product.name" v-bind:value="product.url"></option>
    </select>

    <p>User</p>
    <select v-model="user">
        <option v-for="(user,i) in users" :key="i" v-html="user.name" v-bind:value="user.url"></option>
    </select>


    <p>Total</p>
    <input type="number" placeholder="34.30" step="any" v-model="total">


    <br><br>
    <input
      type="submit"
      value="Add"
      @click="addTransaction({ product: product, user: user, total: total})"
      :disabled="!total">

    <hr/>
    <h3>Transactions</h3>
    <p v-if="transactions.length === 0">No Transactions</p>
    <div class="msg" v-for="(transaction, index) in transactions.filter(transaction => !user || transaction.user == ('http://localhost:8000/api/users/' + user) )" :key="index">
        <p class="msg-subject" ><strong>Product</strong>: <a v-bind:href="transaction.product" v-html="products.filter(product => product.url == transaction.product)[0].name"></a></p>
        <p class="msg-subject" v-html="'<strong>Total</strong>: ' + transaction.total"></p>
        <p class="msg-body"><a v-bind:href="'/#/transactions?user='+users.filter(user => user.url == transaction.user)[0].id" v-html="users.filter(user => user.url == transaction.user)[0].name"></a></p>
        <input type="submit" @click="deleteTransaction(transaction.id)" value="Delete" />
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  name: "Transactions",
  data() {
    return {
      id: "",
      user: "",
      product: "",
      total: "",
    };
  },
  computed: mapState({
    transactions: state => state.transactions.transactions,
    users: state => state.users.users,
    products: state => state.products.products
  }),
  methods: mapActions('transactions', [
    'addTransaction',
    'deleteTransaction'
  ]),
  created() {
    this.$store.dispatch('transactions/getTransactions'),
    this.$store.dispatch('products/getProducts'),
    this.$store.dispatch('users/getUsers')
  }


};

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
hr {
  max-width: 65%;
}

.msg {
  margin: 0 auto;
  max-width: 30%;
  text-align: left;
  border-bottom: 1px solid #ccc;
  padding: 1rem;
}

.msg-index {
  color: #ccc;
  font-size: 0.8rem;
  /* margin-bottom: 0; */
}

img {
  width: 250px;
  padding-top: 50px;
  padding-bottom: 50px;
}

</style>

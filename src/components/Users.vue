<template>
  <div class="hello">
    <p>Name</p>
    <input type="text" placeholder="John Smith" v-model="name">
    <p>Email</p>
    <input type="text" placeholder="something@email.com" v-model="email">
    <p>Firm</p>
    <select v-model="firm">
        <option v-for="(firm,index) in firms" :key="index" v-html="firm.name" v-bind:value="firm.url"></option>
    </select>
    <br><br>
    <input
      type="submit"
      value="Add"
      @click="addUser({ name: name, email: email, firm: firm})"
      :disabled="!name || !email">

    <hr/>
    <h3>Users</h3>
    <p v-if="users.length === 0">No Users</p>
    <div class="msg" v-for="(user, index) in users" :key="index">
        <p class="msg-subject"><strong>Name</strong>: <a v-bind:href="user.url" v-html="user.name"></a></p>
        <p class="msg-body" v-html="'<strong>Email</strong>: ' + user.email"></p>
        <p class="msg-body"><strong>Firm</strong>: <a v-bind:href="user.firm" v-html="firms.filter(firm => firm.url == user.firm)[0].name"></a></p>
        <input type="submit" @click="deleteUser(user.id)" value="Delete" />
        <h3>Transactions:</h3>
        <div class="transaction" v-for="(transaction, index) in transactions.filter(transaction => transaction.user == user.url)" :key="index">
            <p class="msg-subject" v-html="'<strong>Product</strong>: ' + products.filter(product => product.url == transaction.product)[0].name""></p>
            <p class="msg-subject" v-html="'<strong>Total</strong>: ' + transaction.total"></p>
        </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  name: "Users",
  data() {
    return {
      id: "",
      name: "",
      email: "",
      firm: "",
    };
  },
  computed: mapState({
    users: state => state.users.users,
    firms: state => state.firms.firms,
    transactions: state => state.transactions.transactions,
    products: state => state.products.products
  }),
  methods: mapActions('users', [
    'addUser',
    'deleteUser'
  ]),
  created() {
    this.$store.dispatch('users/getUsers'),
    this.$store.dispatch('firms/getFirms'),
    this.$store.dispatch('transactions/getTransactions'),
    this.$store.dispatch('products/getProducts')
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
.transaction {
  margin: 0 auto;
  max-width: 80%;
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

<template>
  <div class="hello">

    <p>Name</p>
    <input type="text" placeholder="Cookies" v-model="name">
    <p>Price</p>
    <input type="number" placeholder="34.30" step="any" v-model="price">

    <br><br>
    <input
      type="submit"
      value="Add"
      @click="addProduct({ name: name, price: price})"
      :disabled="!name || !price">

    <hr/>
    <h3>Products</h3>
    <p v-if="products.length === 0">No Products</p>
    <div class="msg" v-for="(product, index) in products" :key="index">
        <p class="msg-index">[{{index}}]</p>
        <p class="msg-subject" v-html="product.name"></p>
        <p class="msg-body" v-html="product.price"></p>
        <input type="submit" @click="deleteProduct(product.id)" value="Delete" />
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  name: "Products",
  data() {
    return {
      id: "",
      name: "",
      price: "",
    };
  },
  computed: mapState({
    products: state => state.products.products
  }),
  methods: mapActions('products', [
    'addProduct',
    'deleteProduct'
  ]),
  created() {
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

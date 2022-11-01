<template>
  <div class="hello">

    <p>Name</p>
    <input type="text" placeholder="Dye & Durham" v-model="name">
    <br><br>
    <input
      type="submit"
      value="Add"
      @click="addFirm({ name: name})"
      :disabled="!name">

    <hr/>
    <h3>Firms in Database</h3>
    <p v-if="firms.length === 0">No Firms</p>
    <div class="msg" v-for="(firm, index) in firms" :key="index">
        <p class="msg-index">[{{index}}]</p>
        <p class="msg-subject" v-html="firm.name"></p>
        <input type="submit" @click="deleteFirm(firm.id)" value="Delete" />
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
//Firms firms
export default {
  name: "Firms",
  data() {
    return {
      id: "",
      name: "",
    };
  },
  computed: mapState({
    firms: state => state.firms.firms
  }),
  methods: mapActions('firms', [
    'addFirm',
    'deleteFirm'
  ]),
  created() {
    this.$store.dispatch('firms/getFirms')
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

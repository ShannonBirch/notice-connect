
<template>
  <div id="app">
    <h1>Notice Connect Sample</h1>
    <div id="nav">
     <router-link :to="{ name: 'users' }">Users</router-link> |
     <!--<router-link :to="{ name: 'firms' }">Firms</router-link> |
     <router-link :to="{ name: 'products' }">Products</router-link> |-->
     <router-link :to="{ name: 'transactions' }">Transactions</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
<template>
  <div id="app">
    <!--<div id="nav">
      <router-link to="/">Iniciar Sesion</router-link> |
      <router-link to="/about">Registro</router-link>
    </div>-->
    <router-view />
  </div>
</template>
<script>
import {  mapActions } from "vuex";
export default {
  methods: {
    ...mapActions(["leerToken"]),
  },
  created() {
    this.leerToken();
  },
}
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 20px;
  background-color: #14254c;
}

#nav a {
  font-weight: bold;
  color: #fff;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>

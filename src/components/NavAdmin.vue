<template>
  <div>
    <div id="nav"> 
      <router-link to="/useradmin">Usuarios</router-link> |
      <router-link to="/pregadmin">Preguntas</router-link>|
      <router-link to="/">salir</router-link>
    </div>
  </div>
</template>
<style>

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
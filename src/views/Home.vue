<template>
  <div class="home">
    <Nav/>
    <div class="container">
      <div class="row justify-content-center align-items-center">
        <div class="card login mt-5">
          <div class="card-header">Iniciar Sesion</div>
          <div class="card-body text-white login">
            <form @submit.prevent="login()">
              <div class="form-group">
                <label for="exampleInputEmail1">Email address</label>
                <input
                  type="email"
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  v-model="usuario.correo"
                />
                <small id="emailHelp" class="form-text text-muted"
                  >We'll never share your email with anyone else.</small
                >
              </div>
              <div class="form-group">
                <label for="exampleInputPassword1">Password</label>
                <input
                  type="password"
                  class="form-control"
                  id="exampleInputPassword1"
                  v-model="usuario.pass"
                />
              </div>
              <button type="submit" class="btn btn-primary">Ingresar</button>
            </form>
            <div v-if="mensaje !== ''">
              <p>{{mensaje}}</p>
            </div>
          </div>
        </div>
      </div> 
    </div>
  </div>
</template>
<script>
import Nav from '@/components/Nav.vue';
import {  mapMutations,mapActions } from "vuex";
import router from '../router/index';

export default {
  components:{
    Nav
  },
  data() {
    return {
      usuario: {correo: '', pass: ''},
      mensaje: ''
    }
  },
  methods:{
    ...mapMutations(['obtenerUsuario']), 
    ...mapActions(['guardarUsuario']),
    login(){
      this.axios.post('/login', this.usuario)
        .then(res => {
          console.log(res.data);
          const token = res.data.token;
          this.guardarUsuario(token)
          if(this.$store.state.datosDb.data.role == 'ADMIN' ){
          router.push({name:'UsusarioAdmin'})
          }else{
          router.push({name:'Destinos'})
          }
        })
        .catch(err => {
          console.log(err);
          //this.mensaje = err.response.data.mensaje ;
        })
    }
  }
}
</script>

<style >
.login{
  background-color: #14254c ;
  
}
</style>

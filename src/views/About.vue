<template>
  <div class="about">
    <Nav />
    <div class="container">
      <div class="row justify-content-center align-items-center">
        <div class="card mt-5">
          <div class="card-header">Registro</div>
          <div class="card-body text-white login">
            <form @submit.prevent="agregaruser()">
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
              <!---->
              <div class="form-group">
                <label for="exampleInputEmail">Tipo de Usuario</label>
                <input
                  type="text"
                  class="form-control"
                  id="exampleInputEmail"
                  aria-describedby="emailHelp"
                  v-model="usuario.role"
                />
                <small id="emailHelp1" class="form-text text-muted"
                  >Ingrese una de estas dos opciones ADMIN o USER</small
                >
              </div>
              <div class="form-group">
                <label for="exampleInputEmail2">CONTRASEÑA</label>
                <input
                  type="password"
                  class="form-control"
                  id="exampleInputEmail2"
                  aria-describedby="emailHelp"
                  v-model="usuario.pass"
                />
              </div>
              
              <button type="submit" class="btn btn-primary" >Registrame</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Nav from '@/components/Nav.vue';


export default {
  components:{
    Nav
  },
  data() {
    return {
      usuarios:[],
      usuario: {correo: '', pass: '', role:''},
      mensaje: ''
    }
  },
  methods:{
    
    agregaruser(){
      
      this.axios.post('/nuevaPersona', this.usuario)
        .then(res => {
          console.log(res.data);
          this.usuarios.push(res.data)   
          this.$router.push('/login');
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
  color: white;
}
</style>
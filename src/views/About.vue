<template>
  <div class="about">
    <Nav />
    <div class="container">
      <div class="row justify-content-center align-items-center">
        <div class="card mt-5">
          <div class="card-header">Registro</div>
          <div class="card-body">
            <form @submit.prevent="agregaruser()">
              <div class="form-group">
                <label for="exampleInputEmail1">Email address</label>
                <input
                  type="email"
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  v-model="datos.correo"
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
                  v-model="datos.role"
                />
                <small id="emailHelp1" class="form-text text-muted"
                  >Ingrese una de estas dos opciones ADMIN o USER</small
                >
              </div>
              <div class="form-group">
                <label for="exampleInputEmail2">Tipo de Usuario</label>
                <input
                  type="password"
                  class="form-control"
                  id="exampleInputEmail2"
                  aria-describedby="emailHelp"
                  v-model="datos.pass"
                />
              </div>
              
              <button type="submit" class="btn btn-primary" >Submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Nav from "@/components/Nav.vue";
export default {
  name: "about",
  components: {
    Nav,
  },
  data() {
    return {
      datos:{
        correo: "",
        pass: "",
        role: ""
      },
      datoPer:[]
    } 
  },
  methods:{
    agregaruser(){
      console.log(this.datos);
      this.axios
        .post("/nuevaPersona", this.datos)
        .then((res) => {
          this.datoPer.push(res.datos);
          if(this.datos.role == 'ADMIN'){
            this.$router.push('/useradmin')
          }else{ 
            this.$router.push('/Destinos')}
        })
        .catch((e) => {
          console.log(e.response);
        });

    }

  }
};
</script>

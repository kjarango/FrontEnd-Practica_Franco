<template>
  <div class="container Preguntas">
    <div class="row">
      <h5 class="mt-3 justify-content-center">Perfil de usuario</h5>
      <div class="card mt-5 ml-5 col-md-11 justify-content-center cursos">
        <div class="card-body">
          <form @submit.prevent="editarInfo(datos._id)">
            <div class="form-row">
              <div class="form-group col-md-12">
                <label for="inputAddress">Nombre completo</label>
                <input
                  type="text"
                  class="form-control"
                  id="inputAddress"
                  placeholder="NOMBRE COMPLETO"
                  v-model="datos.nombre"
                  :text="nombre"
                />
              </div>
              <div class="form-group col-md-6">
                <label for="inputEmail4">Documento Identidad</label>
                <input
                  type="text"
                  class="form-control"
                  id="inputEmail4"
                  placeholder="CEDULA, NIT ,INE"
                  v-model="datos.docIdentidad"
                />
              </div>
              <div class="form-group col-md-6">
                <label for="inputEmail3">Telefono</label>
                <input
                  type="number"
                  class="form-control"
                  id="inputEmail3"
                  placeholder="telefono"
                  v-model="datos.telefono"
                />
              </div>
              <div class="form-group col-md-6">
                <label for="inputEmail2">direccion</label>
                <input
                  type="text"
                  class="form-control"
                  id="inputEmail2"
                  placeholder="direccion residencia"
                  v-model="datos.direccion"
                />
              </div>

              <div class="form-group col-md-6">
                <label for="inputPassword7">Nivel de Ingles</label>
                <input
                  type="text"
                  class="form-control"
                  id="inputPassword7"
                  placeholder="Nivel de ingles"
                  v-model="datos.ingles"
                />
              </div>
              <div class="form-group col-md-6">
                <label for="inputAddress1">Correo Electronico</label>
                <input
                  type="email"
                  class="form-control"
                  id="inputAddress1"
                  placeholder="Email"
                  v-model="datos.correo"
                />
              </div>
              <div class="form-group col-md-6">
                <label for="inputAddress10">Fecha Nacimiento</label>
                <input
                  type="text"
                  class="form-control"
                  id="inputAddress10"
                  placeholder="fecha naciemiento"
                  v-model="datos.fechaNacimiento"
                />
              </div>
            </div>

            <div class="form-row">
              <div class="form-group col-md-6">
                <label for="inputState">Pais</label>
                <select id="inputState" class="form-control" v-model="datos.pais">
                  <option selected>Choose...</option>
                  <option
                    v-for="(country, index) in countries_list"
                    :key="index"
                  >
                    {{ country.name }}
                  </option>
                </select>
              </div>
              <div class="form-group col-md-6">
                <label for="inputState1">Estado</label>
                <select
                  id="inputState1"
                  class="form-control"
                  v-model="datos.ciudad"
                >
                  <option selected>Choose...</option>
                  <option v-for="(country, idx) in countries_list" :key="idx">
                    {{ country.capital }}
                  </option>
                </select>
              </div>
            </div>
            <button type="submit" class="btn btn-primary">Actualizar</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { mapMutations } from "vuex";
export default {
  name: "Preguntas",
  data() {
    return {
      datoPer: [],
      datos: {
        nombre: "",
        docIdentidad: "",
        telefono: "",
        direccion: "",
        correo: "",
        fechaNacimiento: "",
        ingles: "",
        pais: '',
        ciudad: '',
      },
      countries_list: [],
    };
  },
  created() {
    this.datosId();
  },
  methods: {
    ...mapMutations(["obtenerUsuario"]),
     datosId(id) {
      //var id = this.$store.state.id
      console.log(id);
      this.axios
        .get(`/datos/${this.$store.state.id}`)
        .then((res) => {
         console.log(res)
         this.datos = res.data
        })
        .catch((e) => {
          console.log(e.response);
        });
    },
    editarInfo(item){
      this.axios.put(`/datos/${this.$store.state.id}`, item)
      .then((res) => {
         console.log(res)
         const index = this.datos.findIndex(datos => datos._id === res.data._id)
         this.datos[index] = res.data
        })
        .catch((e) => {
          console.log(e.response);
        });

    }
  },
  mounted() {
    axios
      .get("https://restcountries.eu/rest/v2/region/americas")
      .then((response) => {
        console.log(response);
        this.countries_list = response.data;
      })
      .catch((error) => console.log(error.response));
  },
};
</script>

<style>
h5 {
  margin-left: auto;
  margin-right: auto;
  font-weight: bold;
}

.cursos {
  background-color: #14254c;
  color: aliceblue;
}
</style>

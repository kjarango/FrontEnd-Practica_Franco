<template>
  <div class="container Preguntas">
    <div class="row">
      <div class="card mt-5">
        <div class="card-body">
          <form @submit.prevent="agregarPersona()">
            <div class="form-row">
              <div class="form-group col-md-6">
                <label for="inputAddress">Nombre completo</label>
                <input
                  type="text"
                  class="form-control"
                  id="inputAddress"
                  placeholder="NOMBRE COMPLETO"
                  v-model="datos.nombre"
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
                <label for="inputEmail">Fecha Nacieminto</label>
                <input
                  type="text"
                  class="form-control"
                  id="inputEmail"
                  placeholder="fechaNaciemiento"
                  v-model="datos.fechaNacimiento"
                />
              </div>
              <div class="form-group col-md-6">
                <label for="inputEmail2">Nivel Ingles</label>
                <input
                  type="text"
                  class="form-control"
                  id="inputEmail2"
                  placeholder="Nivel de ingles"
                  v-model="datos.ingles"
                />
              </div>
              <div class="form-group col-md-4">
                <label for="inputState">Escuela</label>
                <select id="inputState" class="form-control" v-model="idioma">
                  <option selected>Choose...</option>
                  <option v-for="ing in ingle" :key="ing._id" :value="ing._id">
                    {{ ing.nivel }}
                  </option>
                </select>
              </div>
              <div class="form-group col-md-6">
                <label for="inputPassword3">Telefono</label>
                <input
                  type="number"
                  class="form-control"
                  id="inputPassword3"
                  placeholder="telefono"
                  v-model="datos.telefono"
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
                <label for="inputAddress1">Direccion</label>
                <input
                  type="text"
                  class="form-control"
                  id="inputAddress1"
                  placeholder="Email"
                  v-model="datos.direccion"
                />
              </div>
            </div>
            <div class="form-row">
              <div class="form-group col-md-4">
                <label for="inputState">Pais</label>
                <select id="inputState" class="form-control">
                  <option selected>Choose...</option>
                  <option>...</option>
                </select>
              </div>
              <div class="form-group col-md-4">
                <label for="inputState1">Estado</label>
                <select id="inputState1" class="form-control">
                  <option selected>Choose...</option>
                  <option>...</option>
                </select>
              </div>
              <div class="form-group col-md-4">
                <label for="inputState2">Ciudad</label>
                <select id="inputState2" class="form-control">
                  <option selected>Choose...</option>
                  <option>...</option>
                </select>
              </div>
            </div>

            <button type="submit" class="btn btn-primary">Guradar</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapState} from "vuex";
export default {
  name: "Preguntas",
  data() {
    return {
      datoPer: [],
      ingle: [],
      idioma: null,
      image: "",
      datos: {
        nombre: "",
        docIdentidad: "",
        telefono: "",
        direccion: "",
        correo: "",
        fechaNacimiento: "",
        ingles: "",
      },
    };
  },
  created() {
    this.listarIngles();
  },
  computed: {
    ...mapState(['token'])
  },
  methods: {
    agregarPersona() {
      let config = {
        headers: {
          token : this.token 
        }
      }
      console.log(this.datos);
      this.axios
        .post("/nuevaPersona", this.datos, config)
        .then((res) => {
          this.datoPer.push(res.datos);
        })
        .catch((e) => {
          console.log(e.response);
        });
    },
    listarIngles() {
      let config = {
        headers: {
          token : this.token 
        }
      }
      this.axios
        .get("/ingles", config)
        .then((res) => {
          console.log(res.data);
          this.hospedaje = res.data;
        })
        .catch((e) => {
          console.log(e.response);
        });
    }
  },
};
</script>

<style>
.cardImagen {
  margin-left: auto;
  margin-right: auto;
}

img {
  border-radius: 50%;
  width: 50px;
  height: 50px;
}
</style>

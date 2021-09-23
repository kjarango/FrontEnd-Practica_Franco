<template>
  <div class="PregustaAdmin">
    <NavAdmin />
    <div class="container">
      <div class="row">
        <!--Editar preguntas-->
        <form @submit="editarPregunta(preguntasEditar)" v-if="editar">
          <div class="card my-5 col-12 cardPreguntas">
            <h5 class="card-header">Editar Preguntas</h5>
            <div class="card-body">
              <div class="form-row">
                <div class="form-group col-md-6">
                  <label for="exampleFormControlTextarea1"
                    >Example textarea</label
                  >
                  <textarea
                    class="form-control"
                    id="exampleFormControlTextarea1"
                    rows="2"
                    v-model="preguntasEditar.enunciado"
                  ></textarea>
                </div>
                <div class="form-group col-md-6">
                  <label for="inputEmail4">Opcion A</label>
                  <input
                    type="text"
                    class="form-control"
                    id="inputEmail4"
                    v-model="preguntasEditar.opcA"
                  />
                </div>
                <div class="form-group col-md-6">
                  <label for="inputPassword1">Opcion B</label>
                  <input
                    type="text"
                    class="form-control"
                    id="inputPassword1"
                    v-model="preguntasEditar.opcB"
                  />
                </div>
                <div class="form-group col-md-6">
                  <label for="inputEmail">Opcion C</label>
                  <input
                    type="text"
                    class="form-control"
                    id="inputEmail"
                    v-model="preguntasEditar.opcC"
                  />
                </div>
                <div class="form-group col-md-6">
                  <label for="inputPassword2">Opcion D</label>
                  <input
                    type="text"
                    class="form-control"
                    id="inputPassword2"
                    v-model="preguntasEditar.opcD"
                  />
                </div>
                <div class="form-group col-md-6">
                  <label for="inputPassword3">Opcion E</label>
                  <input
                    type="text"
                    class="form-control"
                    id="inputPassword3"
                    v-model="preguntasEditar.opcE"
                  />
                </div>
              </div>
              <button type="submit" class="btn btn-warning col-4 mx-2">
                Guardar
              </button>
              <button
                type="submit"
                class="btn btn-info col-4"
                @click="editar = false"
              >
                cancelar
              </button>
            </div>
          </div>
        </form>
        <!-- FIN Editar preguntas-->
        <!--Crear preguntas-->
        <form @submit="agregarPregunta(preg)" v-if="!editar">
          <div class="card my-5 col-12 cardPreguntas">
            <h5 class="card-header">Crear Preguntas</h5>
            <div class="card-body">
              <div class="form-row">
                <div class="form-group col-md-6">
                  <label for="exampleFormControlTextarea1"
                    >Example textarea</label
                  >
                  <textarea
                    class="form-control"
                    id="exampleFormControlTextarea1"
                    rows="2"
                    v-model="preg.enunciado"
                  ></textarea>
                </div>
                <div class="form-group col-md-6">
                  <label for="inputEmail4">Opcion A</label>
                  <input
                    type="text"
                    class="form-control"
                    id="inputEmail4"
                    v-model="preg.opcA"
                  />
                </div>
                <div class="form-group col-md-6">
                  <label for="inputPassword1">Opcion B</label>
                  <input
                    type="text"
                    class="form-control"
                    id="inputPassword1"
                    v-model="preg.opcB"
                  />
                </div>
                <div class="form-group col-md-6">
                  <label for="inputEmail">Opcion C</label>
                  <input
                    type="text"
                    class="form-control"
                    id="inputEmail"
                    v-model="preg.opcC"
                  />
                </div>
                <div class="form-group col-md-6">
                  <label for="inputPassword2">Opcion D</label>
                  <input
                    type="text"
                    class="form-control"
                    id="inputPassword2"
                    v-model="preg.opcD"
                  />
                </div>
                <div class="form-group col-md-6">
                  <label for="inputPassword3">Opcion E</label>
                  <input
                    type="text"
                    class="form-control"
                    id="inputPassword3"
                    v-model="preg.opcE"
                  />
                </div>
              </div>
              <button type="submit" class="btn btn-success btn-block">
                Guardar
              </button>
            </div>
          </div>
        </form>
        <b-alert
          :show="dismissCountDown"
          dismissible
          :variant="mensaje.color"
          @dismissed="dismissCountDown = 0"
          @dismiss-count-down="countDownChanged"
        >
          {{ mensaje.texto }}
        </b-alert>
        <div class="my-5 h3">
          <hr>
          <h3>Preguntas Unica Respuesta</h3>
          <hr>
        </div>
        <table class="table table-striped">
          <thead>
          
            <tr>
              <th scope="col">Enunciado</th>
              <th scope="col">Opcion A</th>
              <th scope="col">Opcion B</th>
              <th scope="col">Opcion C</th>
              <th scope="col">Opcion D</th>
              <th scope="col">Opcion E</th>
              <th scope="col">Accion</th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="encuesta in preguntas"
              :key="encuesta._id"
              :value="encuesta._id"
            >
              <td>{{ encuesta.enunciado }}</td>
              <td>{{ encuesta.opcA }}</td>
              <td>{{ encuesta.opcB }}</td>
              <td>{{ encuesta.opcC }}</td>
              <td>{{ encuesta.opcD }}</td>
              <td>{{ encuesta.opcE }}</td>
              <td>
                <b-button
                  class="btn-danger btn-sm mx-2 my-2"
                  @click="eliminarNota(encuesta._id)"
                  >Eliminar</b-button
                >
                <b-button
                  class="btn-warning btn-sm mx-2"
                  @click="activarEdicion(encuesta._id)"
                  >Editar</b-button
                >
              </td>
            </tr>
          </tbody>
        </table>
         <div class="my-5 h3">
          <hr>
          <h3>Preguntas Falso y Verdadero</h3>
          <hr>
        </div>
         <div class="my-5 h3">
          <hr>
          <h3>Preguntas Abiertas</h3>
          <hr>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import NavAdmin from "@/components/NavAdmin.vue";
export default {
  name: "preguntasAdmin",
  components: {
    NavAdmin,
  },
  data() {
    return {
      preguntas: [],
      mensaje: { color: "success", texto: "" },
      dismissSecs: 5,
      dismissCountDown: 0,
      preg: {},
      editar: false,
      preguntasEditar: {},
    };
  },
  created() {
    this.listarPreguntas();
  },
  methods: {
    listarPreguntas() {
      this.axios
        .get("/pregunta")
        .then((res) => {
          console.log(res.data);
          this.preguntas = res.data;
        })
        .catch((e) => {
          console.log(e.response);
        });
    },
    countDownChanged(dismissCountDown) {
      this.dismissCountDown = dismissCountDown;
    },
    showAlert() {
      this.dismissCountDown = this.dismissSecs;
    },
    agregarPregunta() {
      this.axios
        .post("/nuevapregunta", this.preg)
        .then((res) => {
          // Agrega al inicio de nuestro array notas
          this.preguntas.push(res.data);
          this.preg.enunciado = "";
          this.preg.opcA = "";
          this.preg.opcB = "";
          this.preg.opcC = "";
          this.preg.opcD = "";
          this.preg.opcD = "";

          // Alerta de mensaje
          this.showAlert();
          this.mensaje.texto = "Pregunta Agregada!";
          this.mensaje.color = "success";
        })
        .catch((e) => {
          console.log(e.response);
        });
      this.preguntas = {};
    },
    eliminarNota(id) {
      this.axios
        .delete(`/pregunta/${id}`)
        .then((res) => {
          let index = this.preguntas.findIndex(
            (encuesta) => encuesta._id === res.data._id
          );
          this.preguntas.splice(index, 1);

          this.showAlert();
          this.mensaje.texto = "Pregunta Eliminada!";
          this.mensaje.color = "danger";
        })
        .catch((e) => {
          console.log(e.response);
        });
    },

    activarEdicion(id) {
      this.editar = true;
      console.log(id);
      this.axios
        .get(`/pregunta/${id}`)
        .then((res) => {
          console.log(res.data);
          this.preguntasEditar = res.data;
        })
        .catch((e) => {
          console.log(e.response);
        });
    },

    editarPregunta(id) {
      this.axios
        .put(`/pregunta/${id}`)
        .then((res) => {
          console.log(res.data);
          //this.preguntasEditar = res.data;
          let index = this.preguntas.findIndex(
            (encuesta) => encuesta._id === res.data._id
          );
          this.preguntas[index].enunciado = res.data.enunciado;
          this.preguntas[index].opcA = res.data.opcA;
          this.preguntas[index].opcB = res.data.opcB;
          this.preguntas[index].opcC = res.data.opcC;
          this.preguntas[index].opcD = res.data.opcD;
          this.preguntas[index].opcE = res.data.opcE;
          this.editar = false;
        })
        .catch((e) => {
          console.log(e.response);
        });
    },
  },
};
</script>

<style>
label,
.card-header {
  font-weight: bold;
}

.cardPreguntas {
  background-color: #14254c;
  font-weight: bold;
  color: #fff;
}

.h3{
  margin-left: auto;
  margin-right: auto;
}
</style>

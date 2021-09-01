<template>
  <div class="PregustaAdmin">
      <NavAdmin/>
    <div class="container">
      <div class="row">
        <div class="card my-5 col-12">
          <h5 class="card-header">Crear Preguntas</h5>
          <div class="card-body">
            <form @submit="agregarPregunta(preg)" v-if="agregar">
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
                  <input type="text" class="form-control" id="inputEmail4" v-model="preg.opcA"/>
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
                  <input type="text" class="form-control" id="inputEmail" v-model="preg.opcC" />
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
              <button type="submit" class="btn btn-primary">Guardar</button>
            </form>
          </div>
        </div>
        <b-alert
            :show="dismissCountDown"
            dismissible
            :variant="mensaje.color"
            @dismissed="dismissCountDown=0"
            @dismiss-count-down="countDownChanged"
            >
            {{mensaje.texto}}
        </b-alert>
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
              <td><b-button class="btn-danger btn-sm mx-2" @click="eliminarNota(encuesta._id)">Eliminar</b-button></td>
            </tr>
          </tbody>
        </table>
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
      mensaje: {color: 'success', texto: ''},
      dismissSecs: 5,
      dismissCountDown: 0,
      preg: {},
      agregar: true,
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
      this.dismissCountDown = dismissCountDown
    },
    showAlert() {
      this.dismissCountDown = this.dismissSecs
    },
    agregarPregunta(){
      this.axios.post('/nuevapregunta', this.preg)
        .then(res => {
          // Agrega al inicio de nuestro array notas
          this.preguntas.push(res.data);
          this.preg.enunciado='';
          this.preg.opcA='';
          this.preg.opcB='';
          this.preg.opcC='';
          this.preg.opcD='';
          this.preg.opcD='';

          // Alerta de mensaje
          this.showAlert();
          this.mensaje.texto = 'Pregunta Agregada!'
          this.mensaje.color = 'success';
        })
        .catch( e => {
          console.log(e.response);
        })
      this.preguntas = {}
    },
    eliminarNota(id){
    this.axios.delete(`/pregunta/${id}`)
        .then(res => {
        let index = this.preguntas.findIndex( encuesta => encuesta._id === res.data._id )
        this.preguntas.splice(index, 1);

        this.showAlert();
        this.mensaje.texto = 'Pregunta Eliminada!'
        this.mensaje.color = 'danger'
        })
        .catch( e => {
        console.log(e.response);
        })
    },

  }
}

</script>

<style>
label,
.card-header {
  font-weight: bold;
}
</style>

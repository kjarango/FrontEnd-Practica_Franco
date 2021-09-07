<template>
  <div class="Preguntas">
    <div class="container">
      <div class="row justify-content-center align-items-center">
        <div class="col-sm-6 col-6 col-md-8 col-lg-12">
          <div class="card mt-5" v-if="terminar == false">
            <div
              class="card-body"
              v-for="encuesta in preguntas"
              :key="encuesta._id"
              :value="encuesta._id"
            >
              <h5 class="card-title">{{ encuesta.enunciado }}</h5>
              <div>
                <input class="mx-2" type="radio" id="huey" />
                <label for="huey">{{ encuesta.opcA }}</label>

                <input class="mx-2" type="radio" id="huey" />
                <label for="huey">{{ encuesta.opcB }}</label>

                <input class="mx-2" type="radio" id="huey" />
                <label for="huey">{{ encuesta.opcC }}</label>

                <input class="mx-2" type="radio" id="huey" />
                <label for="huey">{{ encuesta.opcD }}</label>

                <input class="mx-2" type="radio" id="huey" />
                <label for="huey">{{ encuesta.opcE }}</label>
              </div>
            </div>
            <button class="btn btn-primary w-30" @click="terminarEncuesta()">
              Terminar
            </button>
          </div>
        </div>
        <div class="card mt-5" v-if="terminar == true">
          <div class="card-body">
            <h5 class="card-title">Felicidades!!</h5>
            <p>
              terminaste tu encuesta por favor realiza tu matricula y/o ponte en
              contacto con nosotros
            </p>
            <button class="btn btn-primary w-30">Matricula</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      preguntas: [],
      terminar: false,
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
    terminarEncuesta() {
      this.terminar = true;
    },
  },
};
</script>

<style>
.card {
  margin-left: auto;
  margin-right: auto;
  width: 70%;
}

.card-title {
  font-weight: bold;
}
</style>

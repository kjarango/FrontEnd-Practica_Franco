<template>
  <div class="Preguntas">
    <div class="container">
      <div class="row justify-content-center align-items-center">
        <div class="col-sm-6 col-6 col-md-8 col-lg-12">
          <div class="card mt-5" >
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
            
            <a href="/newQuest" class="btn btn-primary my-5">Siguiente</a>
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

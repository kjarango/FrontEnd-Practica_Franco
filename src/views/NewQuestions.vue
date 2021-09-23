<template>
  <div class="container">
    <div class="preguntas" v-if="terminar == false">
      <div class="row ml-5 mt-5">
        
        <div class="card">
          <div
            class="card-body"
            v-for="boolean in fyv"
            :key="boolean._id"
            :value="boolean._id"
          >
            <label for="" class="col-12"> {{ boolean.enunciado }}</label>
            <button class="btn btn-primary mx-2">{{ boolean.si }}</button>
            <button class="btn btn-primary mx-2">{{ boolean.no }}</button>
          </div>
        </div>
      </div>
      <div class="row ml-5 my-5">
       
        <div class="card">
          <div
            class="card-body"
            v-for="open in abiertas"
            :key="open._id"
            :value="open._id"
          >
            <label for="" class="col-12"> {{ open.enunciado }}</label>
            <input type="text" />
          </div>
        </div>
      </div>
      <button class="btn btn-primary w-30 my-2" @click="terminarEncuesta()">
        Terminar
      </button>
    </div>
    <div class="card mt-5" v-if="terminar == true">
      <div class="card-body">
        <h5 class="card-title">Felicidades!!</h5>
        <p>
          terminaste tu encuesta por favor realiza tu matricula y/o ponte en
          contacto con nosotros
        </p>
        
        <a href="/CursosInscrip" class="btn btn-primary my-5">Matricula</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      abiertas: [],
      fyv: [],
      terminar: false,
    };
  },
  created() {
    this.listarPreguntasFV();
    this.listarPreguntasAbi();
  },
  methods: {
    listarPreguntasFV() {
      this.axios
        .get("/preFV")
        .then((res) => {
          console.log(res.data);
          this.fyv = res.data;
        })
        .catch((e) => {
          console.log(e.response);
        });
    },
    listarPreguntasAbi() {
      this.axios
        .get("/preAbi")
        .then((res) => {
          console.log(res.data);
          this.abiertas = res.data;
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

label {
  font-weight: bold;
}
</style>

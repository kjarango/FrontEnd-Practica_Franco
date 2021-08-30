<template>
  <div class="container">
    <div class="row">
      <div class="col-sm-4">
        <div class="card mt-5">
          <div class="card-body">
            <h5 class="card-title">Ingles General</h5>
            <p class="card-text">
              El programa de Inglés General está dirigido a profesionales
               de todas las áreas del conocimiento, estudiantes de secundaria
                y personas interesadas en el aprendizaje del inglés como lengua
                 extranjera. Implementamos las más recientes estrategias metodológicas,
                  abordajes pedagógicos y la incorporación de la tecnología para la 
                  enseñanza del idioma, en las cuales proponemos un enfoque comunicativo e interactivo
            </p>
            
          </div>
        </div>
      </div>
      <div class="col-sm-4">
        <div class="card mt-5">
          <div class="card-body">
            <h5 class="card-title">Ingles Avanzado</h5>
            <p class="card-text">
              niveles avanzados son perfectos para estudiantes que pueden
               manejar la mayoría del lenguaje personal y social en inglés,
                aunque siguen teniendo algunas dificultades con modismos
                 Nuestros cursos de inglés avanzado están pensados para personas
                  que desean mejorar y dominar sus habilidades generales de habla,
                   lectoescritura y escucha, así como obtener un excelente control sobre su gramática, vocabulario y pronunciación.
            </p>
            
          </div>
        </div>
      </div>
      <div class="col-sm-4">
        <div class="card mt-5">
          <div class="card-body">
            <h5 class="card-title">Ingles Tecnico</h5>
            <p class="card-text">
              El inglés técnico y de negocios está relacionado con el uso de términos específicamente
               relacionados con el ambiente de una profesión o carrera. Sectores como ingeniería, salud
                y medicina, farmacéutica, derechos, finanzas y banca, petróleo, tecnología y desarrollo,
                 científico, de investigación, están entre los que tienen mayor necesidad de que el 
                 profesional conozca la jerga propia.
            </p>
            
          </div>
        </div>
      </div>
<div class="card cardIscrip mt-5 p-3">
    <h5 class="card-title">INSCRIPCION</h5>
      <form class="form-row">
        <div class="form-group col-md-4">
          <label for="inputState">Destino</label>
          <select id="inputState" class="form-control">
            <option selected>Seleccione Destino</option>
            <option>Australia</option>
          </select>
        </div>
        <div class="form-group col-md-4">
          <label for="inputState">Escuela</label>
          <select id="inputState" class="form-control" v-model="escu">
            <option selected>Choose...</option>
            <option v-for=" campus in escuela" :key="campus._id" :value="campus._id">{{ campus.nombreCampus }}</option>
          </select>
        </div>
        <div class="form-group col-md-4">
          <label for="inputState">Curso</label>
          <select id="inputState" class="form-control" v-model="curs">
            <option selected>Choose...</option>
            <option v-for=" cursos in curso" :key="cursos._id" :value="cursos._id">{{ cursos.nombreCurso }}</option>
          </select>
        </div>
        <div class="form-group col-md-4">
          <label for="hospedajes">Alojamiento</label>
          <select id="hospedajes" class="form-control" v-model="hospe" >
            <option selected>Selecciona un alojamiento...</option>
            <option v-for=" hospedajes in hospedaje" :key="hospedajes._id" :value="hospedajes._id">{{ hospedajes.nombreHospe }}</option>
          </select>
        </div>
      </form>
      </div>
      <br>
      <div class="col-sm-4 cardIscrip mb-5">
        <div class="card mt-5">
          <div class="card-body">
            <h5 class="card-title">Valor inscripcion</h5>
            <p class="card-text">
              $$$$$
            </p>
            <a href="#" class="btn btn-primary mx-2">Cancelar</a>
            <a href="#" class="btn btn-primary">OK</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      hospedaje:[],
      hospe: null,
      escuela:[],
      escu: null,
      curso:[],
      curs: null
    }
  },
  created(){
      this.listarHospedaje();
      this.listarHEscuela();
      this.listarCurso();
  },
  methods: {
    listarHospedaje(){
      this.axios.get('/hospedaje')
      .then(res => {
        console.log(res.data);
        this.hospedaje = res.data;
      })
      .catch(e => {
        console.log(e.response);
      })
    },
    listarHEscuela(){
      this.axios.get('/campus')
      .then(res => {
        console.log(res.data);
        this.escuela = res.data;
      })
      .catch(e => {
        console.log(e.response);
      })
    },
    listarCurso(){
      this.axios.get('/curso')
      .then(res => {
        console.log(res.data);
        this.curso = res.data;
      })
      .catch(e => {
        console.log(e.response);
      })
    },
  }
}
</script>

<style>
.cardIscrip{
  margin-left:auto;
  margin-right: auto;
}
</style>
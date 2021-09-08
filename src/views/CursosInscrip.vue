<template>
  <div class="container">
    <div class="row">
      <div class="card cardIscrip mt-5 ml-5 p-3 col-md-11">
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
              <option
                v-for="campus in escuela"
                :key="campus._id"
                :value="campus._id"
              >
                {{ campus.nombreCampus }}
              </option>
            </select>
          </div>
          <div class="form-group col-md-4">
            <label for="inputState">Curso</label>
            <select id="inputState" class="form-control" v-model="curs">
              <option selected>Choose...</option>
              <option
                v-for="cursos in curso"
                :key="cursos._id"
                :value="cursos._id"
              >
                {{ cursos.nombreCurso }}
              </option>
            </select>
          </div>
          <div class="form-group col-md-4">
            <label for="hospedajes">Alojamiento</label>
            <select id="hospedajes" class="form-control" v-model="hospe">
              <option selected>Selecciona un alojamiento...</option>
              <option
                v-for="hospedajes in hospedaje"
                :key="hospedajes._id"
                :value="hospedajes._id"
              >
                {{ hospedajes.nombreHospe }}
              </option>
            </select>
          </div>
          <div class="form-group col-md-4">
            <label for="hospedajes">Seleccione Fecha De Inicio</label>
            <select id="hospedajes" class="form-control" v-model="fechaIn">
              <option selected>Selecciona una fecha...</option>
              <option
                v-for="fecha in fechaIni"
                :key="fecha._id"
                :value="fecha._id"
              >
                {{ fecha.fechaInicio }}
              </option>
            </select>
          </div>
        </form>
      </div>
      <br /><!--
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
      </div>-->
      <div class="col-sm-4 cardMatric mb-5">
        <div class="card mt-5">
          <div class="card-body">
            <h5 class="card-title">Realizar Matricula</h5>

            <div v-for="valor in fechaIni" :key="valor._id">
              <b-button v-b-modal.modal-1>Matricula</b-button>

              <b-modal id="modal-1" title="Matricula">
                <p class="my-4">Valor De la Matricula</p>
                <p class="my-4">$$ {{ valor.constoInscrip }}</p>
              </b-modal>
            </div>
          </div>
        </div>
      </div>
      <div class="card cardMatric col-12 my-3 info ml-5">
        <div class="card-body">
          <h5 class="card-title">INCLUYE</h5>
          <p class="card-text">- Pack de bienvenida</p>
          <p class="card-text">- Programa</p>
          <p class="card-text">- Material académico</p>
          <p class="card-text">- Alojamiento</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      hospedaje: [],
      hospe: null,
      escuela: [],
      escu: null,
      curso: [],
      curs: null,
      fechaIni: [],
      fechaIn: null,
      costo: null,
    };
  },
  created() {
    this.listarHospedaje();
    this.listarHEscuela();
    this.listarCurso();
    this.listarFechaInicio();
  },
  methods: {
    listarHospedaje() {
      this.axios
        .get("/hospedaje")
        .then((res) => {
          console.log(res.data);
          this.hospedaje = res.data;
        })
        .catch((e) => {
          console.log(e.response);
        });
    },
    listarHEscuela() {
      this.axios
        .get("/campus")
        .then((res) => {
          console.log(res.data);
          this.escuela = res.data;
        })
        .catch((e) => {
          console.log(e.response);
        });
    },
    listarCurso() {
      this.axios
        .get("/curso")
        .then((res) => {
          console.log(res.data);
          this.curso = res.data;
        })
        .catch((e) => {
          console.log(e.response);
        });
    },
    listarFechaInicio() {
      this.axios
        .get("/inscripcion")
        .then((res) => {
          console.log(res.data);
          this.fechaIni = res.data;
        })
        .catch((e) => {
          console.log(e.response);
        });
    },
  },
};
</script>

<style>
.cardIscrip {
  margin-left: auto;
  margin-right: auto;
  background-color:#14254c;
  color:white
}

.cardMatric {
  margin-left: auto;
  margin-right: auto;
}

</style>

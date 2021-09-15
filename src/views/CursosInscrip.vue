<template>
  <div class="container">
    <div class="row">
      <div class="card cardIscrip mt-5 ml-7 p-3 col-md-11">
        <h5 class="card-title">INSCRIPCION</h5>
        <form class="form-row" @submit.prevent="matricular()">
          <div class="form-group col-md-4">
            <label for="inputState">Destino</label>
            <select id="inputState" class="form-control">
              <option selected>Seleccione Destino</option>
              <option>Australia</option>
            </select>
          </div>
          <div class="form-group col-md-4">
            <label for="inputState">Escuela</label>
            <select
              id="inputState"
              class="form-control"
              v-model="inscripcion.escu"
            >
              <option selected>Selcciones La Escuela</option>
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
            <select
              id="inputState"
              class="form-control"
              v-model="inscripcion.curs"
            >
              <option selected>Seleccione el curso</option>
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
            <select
              id="hospedajes"
              class="form-control"
              v-model="inscripcion.hospe"
            >
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
            <select
              id="hospedajes"
              class="form-control"
              v-model="inscripcion.fechaIn"
            >
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
          <button class="btn btn-primary col-md-4 h-20" type="submit">
            continuar
          </button>
        </form>
      </div>
      <br />
      <div class="col-sm-4 cardMatric mb-5">
        <div class="card mt-5" v-if="mostrar == true">
          <div class="card-body">
            <h5 class="card-title">Valor inscripcion</h5>
            <p class="card-text">$ {{ matricula }}</p>
            <a href="/CursosInscrip" class="btn btn-primary mx-2">Cancelar</a>
            <a href="/Pre" class="btn btn-primary" @click="downloadPDF()">OK</a>
          </div>
        </div>
      </div>
      <div class="card cardIscrip col-11 my-3 info ml-5">
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
import { mapState } from "vuex";
import jsPDF from "jspdf";
import "jspdf-autotable";
export default {
  data() {
    return {
      hospedaje: [],
      escuela: [],
      curso: [],
      fechaIni: [],
      mostrar: false,
      matric: [],
      inscripcion: {
        hospe: "",
        escu: "",
        curs: "",
        fechaIn: "",
        costo: "600.00",
      },
    };
  },
  created() {
    this.listarHospedaje();
    this.listarHEscuela();
    this.listarCurso();
    this.listarFechaInicio();
    this.listarInscripcion();
  },
  computed: {
    matricula() {
      return this.$store.state.matricula;
    },
    ...mapState(["token"]),
  },
  methods: {
    matricular() {
      let config = {
        headers: {
          token: this.token,
        },
      };
      this.mostrar = true;
      console.log(this.inscripcion);
      this.axios
        .post("/nuevaInscrip", this.inscripcion, config)
        .then((res) => {
          this.matric.push(res.data);
        })
        .catch((e) => {
          console.log(e.response);
        });
    },
    listarInscripcion() {
      this.axios
        .get("/inscripcion")
        .then((res) => {
          console.log(res.data);
          this.matric = res.data;
        })
        .catch((e) => {
          console.log(e.response);
        });
    },
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
    downloadPDF() {
      var pdf = new jsPDF();
      pdf.text("conceptos Matricula", 50, 50);
      var columns = [
        "Destino",
        "Escuela",
        "Curso",
        "Alojamiento",
        "Fecha- Inicio",
        "Valor",
      ];
      var data = [
        [
          "Australia",
          "Sidney",
          "Ingles General",
          "Habitacion Campus",
          "20 Enero 2022",
          "$ 600.00",
        ],
      ];
      pdf.autoTable(columns, data, { margin: { top: 25 } });
      pdf.save("informacion.pdf");
    },
  },
};
</script>

<style>
.cardIscrip {
  margin-left: auto;
  margin-right: auto;
  background-color: #14254c;
  color: white;
}

.cardMatric {
  margin-left: auto;
  margin-right: auto;
}
</style>

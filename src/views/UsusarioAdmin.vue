<template>
  <div class="UsuariosAdmin">
    <NavAdmin />
    <h1 class="mt-5">Listado de usuarios Que se han Registrado</h1>
    <div>
      <label for="">Descargar Informacion de los Usuarios </label>
      <button
        type="button"
        class="btn btn-outline-success mx-2 my-3"
        @click="downloadPDF()"
      >
        Descragar
      </button>
    </div>
    <div class="container">
      <table class="table my-5">
        <thead>
          <tr>
            <th scope="col"># identificacion</th>
            <th scope="col">Nombre</th>
            <th scope="col">Telefono</th>
            <th scope="col">Correo</th>
            <th scope="col">Fecha Nacimiento</th>
            <th scope="col">Direcicon</th>
            <th scope="col">Pais</th>
            <th scope="col">Ingles</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in user" :key="index">
            <th>{{ item.docIdentidad }}</th>
            <th>{{ item.nombre }}</th>
            <td>{{ item.telefono }}</td>
            <td>{{ item.correo }}</td>
            <td>{{ item.fechaNacimiento }}</td>
            <td>{{ item.direccion }}</td>
            <td>{{ item.pais }}</td>
            <td>{{ item.ingles }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<script>
import NavAdmin from "@/components/NavAdmin.vue";
import jsPDF from "jspdf";
import "jspdf-autotable";
export default {
  name: "Usuarios Admin",
  components: {
    NavAdmin,
  },
  data() {
    return {
      user: [],
    };
  },
  created() {
    this.listarusuario();
  },
  methods: {
    listarusuario() {
      this.axios
        .get("/datos")
        .then((response) => {
          console.log(response.data);
          this.user = response.data;
        })
        .catch((e) => {
          console.log("error" + e);
        });
    },
    downloadPDF() {
      var pdf = new jsPDF();
      pdf.text("Informacion de los usuarios registrados", 50, 50);
      var columns = [
        "Identificacion",
        "Nombre",
        "Email",
        "FechaNacimiento",
        "Activo",
      ];
      var data = [
        [
          123456789,
          "kajuliethren",
          "kjarango0424@gmail.com",
          "Sun Oct 02 1994 19:00:00 GMT-0500 (GMT-05:00)",
          "si",
        ],
        [
          1053837687,
          "karen julieth",
          "arangokaren424@gmail.com",
          "Sun Oct 02 1994 19:00:00 GMT-0500 (GMT-05:00)",
          "no",
        ],
        [
          105383,
          "julieth arango",
          "julieth@hotmail.com",
          "Sun Oct 02 1994 19:00:00 GMT-0500 (GMT-05:00)",
          "si",
        ],
        [1053837687, "usuario 1", "usuario1@gmail.com", "03-oct-1994", "si"],
      ];
      pdf.autoTable(columns, data, { margin: { top: 25 } });
      pdf.save("informacion.pdf");
    },
  },
};
</script>

<template>
  <div class="sidebar">
    <div class="sidenav">
      <ul class="sidebar-menu metismenu nav-links acorh" id="sidebar-menu">
        <li class="active">
          <a href="Destinos">
            <i class="fa fa-map-marker"></i>
            <span class="nav-text"> Destinos </span>
          </a>
        </li>
        <li>
          <a href="Hospedaje">
            <i class="fa fa-home"></i>
            <span class="nav-text"> Hospedaje </span>
          </a>
        </li>
        <li>
          <a href="cursos">
            <i class="fa fa-bar-chart-o"></i>
            <span class="nav-text"> Cursos </span>
          </a>
        </li>
        <li>
          <a href="Pre">
            <i class="fa fa-info"></i>
            <span class="nav-text"> Mi Perfil </span>
          </a>
        </li>
        <li>
          <a href="Preguntas">
            <i class="fa fa-bar-chart-o"></i>
            <span class="nav-text"> Preguntas </span>
          </a>
        </li>
        <li>
          <a href="CursosInscrip">
            <i class="fa fa-bar-chart-o"></i>
            <span class="nav-text"> Inscripcion </span>
          </a>
        </li>
        <li>
          <a href="Documentos">
            <i class="fa fa-folder-open"></i>
            <span class="nav-text"> Archivos </span>
          </a>
        </li>
      </ul>
      <ul class="logout">
        <li>
          <a href="#" @click="cerrarSesion()" v-if="estaActivo">
            <i class="fa fa-power-off"></i>
            <span class="nav-text"> Logout </span>
          </a>
        </li>
      </ul>
    </div>
    <section class="ml-100">
      <router-view />
    </section>
  </div>
</template>
<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: "Menulateral",
  methods: {
    ...mapActions(["cerrarSesion"]),
  },
  computed: {
    ...mapGetters(["estaActivo"]),
  },
};
</script>

<style>
@import url(//netdna.bootstrapcdn.com/font-awesome/4.0.3/css/font-awesome.css);
/** The sidebar menu */
.sidenav {
  height: 100%; /* Full-height: remove this if you want "auto" height */
  width: 200px; /* Set the width of the sidebar */
  position: fixed; /* Fixed Sidebar (stay in place on scroll) */
  z-index: 1; /* Stay on top */
  top: 0; /* Stay at the top */
  left: 0;
  background-color: #14254c; /* Black */
  overflow-x: hidden; /* Disable horizontal scroll */
  padding-top: 20px;
  text-align:left;
}

section {
  margin-left: 150px;
}

/* The navigation menu links */
.sidenav a {
  padding: 6px 3px 0px 0px;
  text-decoration: none;
  font-size: 18px;
  color: #1374e2;
  display: block;
}

/* When you mouse over the navigation links, change their color */
.sidenav a:hover {
  color: #f1f1f1;
}

ul li {
  list-style: none;
}

/* Style page content */
.main {
  margin-left: 160px; /* Same as the width of the sidebar */
  padding: 0px 10px;
}

/* On smaller screens, where height is less than 450px, change the style of the sidebar (less padding and a smaller font size) */
@media screen and (max-height: 450px) {
  .sidenav {
    padding-top: 15px;
  }
  .sidenav a {
    font-size: 18px;
  }
}
/*fin del estilo del menu lateral*/
ul.acorh,
ul.acorh * {
  margin: 0;
  padding: 0;
  border: 0;
}
ul.acorh {
  margin: 10px auto;
  padding: 0;
  list-style: none;
  width: 100%;
  font-size: 18px;
}
ul.acorh li {
  list-style: none;
}
ul.acorh li a {
  display: block;
  padding: 10px 10px 10px 20px;
  color: #eee;
  border-bottom: 1px solid #14254c;
  border-top: 1px solid #14254c;
  text-decoration: none;
  box-sizing: border-box;
}
ul.acorh li ul {
  max-height: 0;
  margin: 0;
  padding: 0;
  list-style: none;
  overflow: hidden;
  transition: 0.3s all ease-in;
}
ul.acorh li li a {
  padding: 10px 10px 10px 40px;
  background: #14254c;
  color: #ccc;
  font-size: 16px;
  border: 0;
  border-top: 1px solid #14254c;
  border-bottom: 1px solid var(--color-divider);
  box-sizing: border-box;
}
ul.acorc li li:last-child a {
  border-bottom: 0;
}
ul.acorh li:hover ul {
  max-height: 300px;
  transition: 0.3s all ease-in;
}
ul.acorh li a:hover {
  background: #666;
  color: #fff;
}
</style>

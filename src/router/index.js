import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
//import Destino from "../views/Destinos"

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: () => import(/* webpackChunkName: "about" */ "../views/About.vue")
    
  },
  {
    path: "/cursosInscrip",
    name: "CursosInscrip",
    component: () => import( "../views/CursosInscrip.vue")
    
  },
  {
    path: '/preguntas',
    name:'Preguntas',
    component: () => import('../views/Preguntas.vue')
  },
  {
    path: '/hospedaje',
    name: 'Hospedaje',
    component: ()=> import('../views/Hospedaje.vue')
  },
  {
    path: "/perfilUser",
    name: "Perfil",
    ccomponent: () => import( "../views/Perfil.vue")
    
  },
  {
    path: "/destinos",
    name: "Destinos",
    component: () => import( "../views/Destinos.vue")
    
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;

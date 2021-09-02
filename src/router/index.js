import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
//import Destino from "../views/Destinos"
import store from '../store';
Vue.use(VueRouter);

const routes = [
  {
    path: "/login",
    name: "Home",
    component: Home,
  },
  {
    path: "/signup",
    name: "About",
    component: () => import(/* webpackChunkName: "about" */ "../views/About.vue")
    
  },
  
  {
    path:"/",
    name:"Bienvenida",
    component: () => import("../views/Bienvenida.vue")    
  },
  {
    path: "/menu",
    name: "MenuLateral",
    component: () => import("../views/MenuLateral.vue"),
    children: [
      {
        path: "/cursosInscrip",
        name: "CursosInscrip",
        component: () => import( "../views/CursosInscrip.vue"),
        
        
      },
      {
        path: '/pre',
        name:'Pre',
        component: () => import('../views/Pre.vue')
      },
      {
        path: '/hospedaje',
        name: 'Hospedaje',
        component: ()=> import('../views/Hospedaje.vue')
      },
      {
        path: "/destinos",
        name: "Destinos",
        component: () => import( "../views/Destinos.vue")
        
      },
      {
        path:"/preguntas",
        name: "Preguntas",
        component: () => import( "../views/Preguntas.vue"),
        
      },
      {
        path:"/documentos",
        name:"Documentos",
        component: () => import( "../views/Documentos.vue")
      },
      {
        path:"/cursos",
            name:"cursos",
            component: () => import( "../views/cursos.vue")
      }
    ]
  },
  {
    path:"/pregadmin",
        name:"PreguntasAdmin",
        component: () => import( "../views/PreguntasAdmin.vue")
  },
  {
    path:"/useradmin",
        name:"UsusarioAdmin",
        component: () => import( "../views/UsusarioAdmin.vue")
  }
  
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  const rutaProtegida = to.matched.some(record => record.meta.requireAuth);

  if(rutaProtegida && store.state.token === ''){
    // console.log(store.state.token);
    next({name: 'login'})

  }else{
    next()
  }

})


export default router;

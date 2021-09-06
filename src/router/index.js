import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
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
    component: () => import(/* webpackChunkName: "about" */"../views/Bienvenida.vue")    
  },
  {
    path: "/menu",
    name: "MenuLateral",
    component: () => import(/* webpackChunkName: "about" */ "../views/MenuLateral.vue"),
    children: [
      {
        path: "/cursosInscrip",
        name: "CursosInscrip",
        component: () => import(/* webpackChunkName: "about" */ "../views/CursosInscrip.vue"),
        
        
      },
      {
        path: '/pre',
        name:'Pre',
        component: () => import(/* webpackChunkName: "about" */'../views/Pre.vue')
        ,
        meta: {requireAuth: true}
      },
      {
        path: '/hospedaje',
        name: 'Hospedaje',
        component: ()=> import(/* webpackChunkName: "about" */'../views/Hospedaje.vue')
      },
      {
        path: "/destinos",
        name: "Destinos",
        component: () => import(/* webpackChunkName: "about" */ "../views/Destinos.vue")
        
      },
      {
        path:"/preguntas",
        name: "Preguntas",
        component: () => import(/* webpackChunkName: "about" */ "../views/Preguntas.vue"),
        
      },
      {
        path:"/documentos",
        name:"Documentos",
        component: () => import(/* webpackChunkName: "about" */ "../views/Documentos.vue")
      },
      {
        path:"/cursos",
            name:"cursos",
            component: () => import(/* webpackChunkName: "about" */ "../views/cursos.vue")
      }
    ]
  },
  {
    path:"/pregadmin",
        name:"PreguntasAdmin",
        component: () => import(/* webpackChunkName: "about" */ "../views/PreguntasAdmin.vue")
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

  if (rutaProtegida && localStorage.getItem('token') === null){
    console.log(store.state.token);
    next({name: 'Home'})

  }else{
    next()
  }

})


export default router;

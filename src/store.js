import Vue from 'vue'
import Vuex from 'vuex'
import router from './router'

// para decodificar el jwt
import decode from 'jwt-decode'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    token: '',
    datosDb: '',
    nombre:'',
    id:'',
    docIdentidad:'',
    telefono:'',
    direccion:'',
    fechaNacimiento:'',
    pais:'',
    ciudad:'',
    ingles:'',
    inscripcion:'',
    role:''
  },
  mutations: {
    obtenerUsuario(state, payload){
      state.token = payload;
      if(payload === ''){
        state.datosDb = ''
      }else{
        state.datosDb = decode(payload);
        state.nombre = state.datosDb.data.nombre
        state.id = state.datosDb.data._id
        state.docIdentidad  = state.datosDb.data.docIdentidad
        state.telefono = state.datosDb.data.telefono
        state.direccion = state.datosDb.data.direccion
        state.fechaNacimiento = state.datosDb.data.fechaNacimiento
        state.pais = state.datosDb.data.pais
        state.ciudad = state.datosDb.data.ciudad
        state.ingles = state.datosDb.data.ingles
        state.inscripcion = state.datosDb.data.inscripcion
        state.role = state.datosDb.data.role
console.log(state.role )
      }
    },
    registrarUsuario(state, payload){
      state.token = payload;
      if(payload === ''){
        state.datosDb = ''
      }else{
        state.datosDb = decode(payload);
        if(this.state.datosDb.data.role == 'ADMIN' ){
          router.push({name:'UsusarioAdmin'})
        }else{
        router.push({name:'Destinos'})
        }
      }
    }
  },
  actions: {
    guardarUsuario({commit}, payload){
      localStorage.setItem('token', payload);
      commit('obtenerUsuario', payload)
    },
    cerrarSesion({commit}){
      commit('obtenerUsuario', '');
      localStorage.removeItem('token');
      router.push({name:'Home'});
    },
    leerToken({commit}){

      const token = localStorage.getItem('token');
      if(token){
        commit('obtenerUsuario', token);
      }else{
        commit('obtenerUsuario', '');
      }

    }

  },
  getters:{
    estaActivo: state => !!state.token
  }
})
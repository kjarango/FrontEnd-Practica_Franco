import Vue from 'vue'
import Vuex from 'vuex'
import router from './router'

// para decodificar el jwt
import decode from 'jwt-decode'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    token: '',
    datosDb: ''
  },
  mutations: {
    obtenerUsuario(state, payload){
      state.token = payload;
      if(payload === ''){
        state.datosDb = ''
      }else{
        state.datosDb = decode(payload);
        router.push({name:'Destinos'})
      }
    },
    registrarUsuario(state, payload){
      state.token = payload;
      if(payload === ''){
        state.datosDb = ''
      }else{
        state.datosDb = decode(payload);
        if(this.state.datosDb.role == 'ADMIN' ){
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
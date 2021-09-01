<template>
    <div class="UsuariosAdmin">
        <NavAdmin/>
        <h1 class="mt-5"> Listado de usuarios Que se han Registrado</h1>
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
                    <th>{{item.docIdentidad}}</th>
                    <th>{{item.nombre}}</th>
                    <td>{{item.telefono}}</td>
                    <td>{{item.correo}}</td>
                    <td>{{item.fechaNacimiento}}</td>
                    <td>{{item.direccion}}</td>
                    <td>{{item.pais}}</td>
                    <td>{{item.ingles}}</td>
                </tr>
            </tbody>
            </table>
        </div>
    </div>
</template>
<script>
import NavAdmin from "@/components/NavAdmin.vue";
export default {
  name: "Usuarios Admin",
  components: {
    NavAdmin,
  },
    data() {
        return{
            user:[]
            
        }
        
    },
    created(){
        this.listarusuario();
    },
    methods:{
        listarusuario(){
            this.axios.get('/datos')
            .then((response) => {
                console.log(response.data)
                this.user = response.data;
            })
            .catch((e)=>{
                console.log('error' + e);
            })
            }
        }

    }
</script>

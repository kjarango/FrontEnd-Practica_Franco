<template>
    <div class="Preguntas">
        <div class="container">
            <div class="row justify-content-center align-items-center">
            <div class="col-sm-6 col-6 col-md-8 col-lg-12">
                <div class="card mt-5">
                <div class="card-body" v-for=" encuesta in preguntas" :key="encuesta._id" :value="encuesta._id">
                    <h5 class="card-title">{{encuesta.enunciado}}</h5>
                    <a href="#" class="btn btn-primary mx-1">{{encuesta.opcA}}</a>
                    <a href="#" class="btn btn-primary mx-1">{{encuesta.opcA}}</a>
                    <a href="#" class="btn btn-primary mx-1">{{encuesta.opcC}}</a>
                    <a href="#" class="btn btn-primary mx-1">{{encuesta.opcD}}</a>
                    <a href="#" class="btn btn-primary mx-1 mt-2">{{encuesta.opcE}}</a>
                </div>
                </div>
            </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return{
            preguntas:[],

        }
        
    },
    created(){
        this.listarPreguntas();
    },
    methods: {
        listarPreguntas(){
            this.axios.get('/pregunta')
            .then(res => {
                console.log(res.data)
                this.preguntas = res.data
            })
            .catch(e => {
        console.log(e.response);
      })
        }
    }
}
</script>

<style>
.card{
    margin-left: auto;
    margin-right: auto;
    width: 70%;
}

.card-title{
    font-weight: bold;
}
</style>
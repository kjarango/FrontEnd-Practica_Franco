<template>
    <div class="container Destinos">
        <h3 class="mt-5">Nuestros Destinos</h3>
        <div class="row mt-2 mx-auto">
            <div class="card mb-3" style="width: 70rem;">
                <img class="card-img-top"  src="../assets/Australia.jpg" alt="Card image cap">
                <div class="card-body">
                    <h5 class="card-title">AUSTRALIA</h5>

                </div>
            </div>
            
            <div class="col-sm-6">
                <div class="card mt-3" style="width: 30rem;">
                    <img class="card-img-top" src="../assets/sidney.jpg" alt="Card image cap">
                    <div class="card-body">
                        <h5 class="card-title">SIDNEY</h5>
                        <p class="card-text">Con un hermoso cielo azul y un sol brillante, aprende a surfear en la playa Bondi, admira la ópera flotante en su puerto y conoce a los simpáticos nativos mientras tomas un café en la famosa Oxford Street.</p>
                        
                    </div>
                </div>
            </div>
            <div class="col-sm-6">
                <div class="card mt-3" style="width: 30rem;">
                    <img class="card-img-top" src="../assets/brisbane.jpg" alt="Card image cap">
                    <div class="card-body">
                        <h5 class="card-title">BRISBANE</h5>
                        <p class="card-text">Considerado el mejor lugar donde vivir en Australia, Brisbane combina cultura cosmopolita y un estilo de vida tranquilo. Explora el río Brisbane, el santuario Koala Lone Pine y el animado distrito Southbank.</p>
                        
                    </div>
                </div>
            </div>
            <hr>
            <div class="card w-75 mt-3 info justify-content-center">
                <div class="card-body">
                    <h5 class="card-title">SOBRE NUESTRAS ESCUELAS</h5>
                    <p class="card-text">- Nuestra escuela está situada en un barrio estudiantil.</p>
                    <p class="card-text">- Clases luminosas equipadas con lo último en tecnología educativa</p>
                    <p class="card-text">- Espacioso salón para estudiantes con mesa de billar, futbolín y videojuegos</p>
                    <p class="card-text">- Excursiones organizadas a las Blue Mountains y Taronga Zoo</p>
                    <p class="card-text">- A 3 minutos a pie de tiendas y restaurantes</p>
                    <p class="card-text">- A 10 minutos andando de la estación principal</p>
                </div>
                </div>
           <div class="card w-75 my-3 info">
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
//import Menulateral from '@/components/MenuLateral.vue';
export default{
    name: "Destinos",
    components: {
        //Menulateral <Menulateral/>
  },
}
</script>

<style>
.info{
    margin-right: auto;
    margin-left: auto;
}
.card-title{
    font-weight: bold;
}
</style>

<template>
  <div class="container Hospedaje">
    <h3 class="mt-5">Tipos de Hospedaje</h3>
    <div class="row mt-5 ml-5">
      <div class="col-sm-6">
        <div class="card" style="width: 20rem">
          <img
            class="card-img-top"
            src="../assets/residencia-universitaria.jpg"
            alt="Card image cap"
          />
          <div class="card-body">
            <h5 class="card-title">Campus o College</h5>
            <p class="card-text">
              ♥ Ambiente estudiantil: vivir en un colegio mayor o en una
              residencia de estudiantes
            </p>
            <p class="card-text">
              ♥ Habitación propia, baño propio o compartido, reserva de pensión
            </p>
          </div>
        </div>
      </div>
      <div class="col-sm-6">
        <div class="card" style="width: 20rem">
          <img
            class="card-img-top"
            src="../assets/vivienda-estudiantes-spain.jpg"
            alt="Card image cap"
          />
          <div class="card-body">
            <h5 class="card-title">Residencias Estudiantiles</h5>
            <p class="card-text">
              ♥ Comunidad Sprachcaffe: todos los participantes del curso bajo un
              mismo techo por ejemplo, en un complejo de apartamentos o en un
              hotel.
            </p>
            <p class="card-text">
              ♥ Descubre la sensación de compartir piso: compartir un
              apartamento (y posiblemente la habitación doble)
            </p>
          </div>
        </div>
      </div>
      <div class="col-12 justify-content-center">
        <div class="card" style="width: 20rem">
          <img
            class="card-img-top"
            src="../assets/Homestay.jpeg"
            alt="Card image cap"
          />
          <div class="card-body">
            <h5 class="card-title">Hogar Anfitrion</h5>
            <p class="card-text">
              ♥ Casa de huéspedes Desde alojamientos con cocina hasta pensión
              completa
            </p>
            <p class="card-text">
              ♥ El hotel tiene su propio baño, que se comparte en la casa de
              huéspedes.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Hospedaje",
};
</script>

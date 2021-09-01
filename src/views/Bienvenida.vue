<template>
  <div class="welcome">
    <header>
      <div class="container">
        <div class="textos">
          
          <h1>Bienvenido</h1>
          
          <h4>En este espacio te podemos contar un poco más sobre el proceso para estudiar inglés en Australia. Para poderte brindar la información adecuada, necesitamos saber un poco más de ti.</h4>
          
         
          
          <a href="/login">Continuemos</a>
        </div>
        
        <!--<input type="button" class="btn btn-primary" value="Logout" @click="logout" />-->
      </div>
    </header>
    <div class="wave">
      <div style="height: 150px; overflow: hidden;">
        <svg
          viewBox="0 0 500 150"
          preserveAspectRatio="none"
          style="height: 100%; width: 100%;"
        >
          <path
            d="M0.00,49.98 C150.00,150.00 349.20,-50.00 500.00,49.98 L500.00,150.00 L0.00,150.00 Z"
            style="stroke: none; fill: #fff;"
          ></path>
        </svg>
      </div>
    </div>
  </div>
</template>
<script>
export default{
    name: "Bienvenida"
}
</script>

<style >

header {
  background: #da4453; /* fallback for old browsers */
  background: -webkit-linear-gradient(to right,#14254c,#283cc9); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to right,#14254c,#283cc9 ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  height: auto;
  padding: 48px;
  width: 100%;
}

.container {
  width: 95%;
  max-width: 1200px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin: auto;
}

img {
  display: block;
  height: 450px;
  object-fit: cover;
  animation: arriba 1s ease-in;
}

.textos {
  width: 50%;
  color: #fff;
}

.textos h1 {
  font-size: 80px;
  animation: moverDerecha 1s ease-in;
}

.textos h2 {
  font-size: 30px;
  animation: moverIzquierda 1s ease-in;
}

.textos a {
  display: inline-block;
  color: #fff;
  font-weight: 300;
  text-decoration: none;
  margin-top: 30px;
  border: 1px solid #fff;
  width: 150px;
  border-radius: 3px;
  text-align: center;
  padding: 10px 0;
  animation: arriba 1s ease-in;
}

.wave {
  height: 100px;
  width: 100%;
  background: #da4453; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to right,#14254c,#283cc9
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to right,#14254c,#283cc9
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
}

.uno {
  -webkit-clip-path: circle(0% at 0 0);
  clip-path: circle(0% at 0 0);
}

.dos {
  -webkit-clip-path: circle(150% at 0 0);
  clip-path: circle(150% at 0 0);
}

@keyframes moverIzquierda {
  0% {
    opacity: 0;
    transform: translateX(-100px);
  }

  100% {
    opacity: 1;
    transform: translate(0);
  }
}

@keyframes moverDerecha {
  0% {
    opacity: 0;
    transform: translateX(100px);
  }

  100% {
    opacity: 1;
    transform: translate(0);
  }
}

@keyframes arriba {
  0% {
    opacity: 0;
    transform: translateY(100px);
  }

  100% {
    opacity: 1;
    transform: translate(0);
  }
}

@media screen and (max-width: 1000px) {
  img {
    height: 400px;
  }
}

@media screen and (max-width: 800px) {
  img {
    height: 370px;
  }
  .textos h1 {
    font-size: 70px;
  }

  .textos h2 {
    font-size: 25px;
  }
}

@media screen and (max-width: 700px) {
  img {
    height: 250px;
  }
  .textos h1 {
    font-size: 40px;
  }

  .textos h2 {
    font-size: 15px;
  }
}

@media screen and (max-width: 450px) {
  .container {
    width: 100%;
    flex-wrap: wrap-reverse;
    justify-content: center;
  }
  .textos {
    width: 100%;
    text-align: center;
  }
  .textos h1 {
    font-size: 60px;
  }
}

@media screen and (max-width: 340px) {
  img {
    height: 160px;
  }
  .textos h1 {
    font-size: 35px;
  }
  .textos a {
    width: 120px;
  }
  .textos h2 {
    font-size: 15px;
  }
}
</style>
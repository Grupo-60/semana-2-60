<template>

  <div id="app">

    <services></services>
    <div class="container-fluid">
      <section-api></section-api>
    </div>
    <div class="container-fluid">
        <div class="row justify-content-center mb-5">
          <div class="col mt-4" v-for="(item, index) of team" :key="index">
            <team-card v-bind:member="item"></team-card>
          </div>
        </div>
    </div>    

    <h1>{{ title }}</h1>
  </div>

</template>

<script>
import Services from './components/Services.vue';
import SectionApi from './components/SectionApi.vue';
import TeamCard from './components/TeamCard.vue';

export default {
  name: 'App',
  components: {
    TeamCard,
    SectionApi,
    Services,
  },
  data(){
    return{
      team: [
        {
          codigo: 1,
          nombre: "Geovani Gregorio Rincón Navas",
          descripcion: "Ingeniero de Sistemas de la Universidad Industrial de Santander, Nació en Bucaramanga Santander el 8 de septiembre de 1973, Edad 47 años, Hobbies el Baloncesto, Natacion y la programacion, la buena comida y le encantar ir a cine.",
          rol: "Desarrollador Backend",
          image: "img/geovani_3x4.jpg",
        },
        {
          codigo: 2,
          nombre: "Santiago Sanchez Salazar",
          descripcion: "Estudiante de Ingenieria Mecanica de la Universidad Nacional de Colombia sede Medellin, Nació en la ciudad de Medellin el 25 de Diciembre de 1999, Edad 21 años, Hobbies Montar Biciclea, videojuegos y Cocinar, le encantar ir a cine.",
          rol: "Arquitecto de Software",
          image: "img/santiago_3x4.jpg",
        },
        {
          codigo: 3,
          nombre: "Daniel Geovani Rincón Amaya",
          descripcion: "Estudiante del Sena en el Area de programacion de computadores, Nació en Floridablanca Santander el 18 de octubre de 2001, Edad 19 Años, Hobbies Futbol y Video Juegos, le encanta ver partidos de Futbol y peliculas en el cine.",
          rol: "Tester",
          image: "img/daniel_3x4.jpg",
        },
        {
          codigo: 4,
          nombre: "Juan David Alvarez Plata",
          descripcion: "Ingeniero mecánico con experiencia en proyectos de automatización y atención al cliente. Nació en la ciudad de Bogotá el 11 de Enero de 1996, edad 24 años. Hobbies videojuegos, jugar ultimate y tocar guitarra, apasionado por la aviación.",
          rol: "Analista",
          image: "img/juan_3x4.jpg",
        },
      ],
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-smoothing: grayscale;
  /*text-align: center;*/
  color: #2c3e50;
}
</style>


<template>
<section>
  <div class="row mt-md-5 mt-ms-5 mt-mx-5" id="news">
    <div class="col-lg-6 col-lx-12" v-for="(movie, index) of movies" :key="index">
      <div class="d-flex justify-content-center align-items-center">
        <div class="p-3">
          <img :src="movie.Poster" alt="Movie Poster" width="300" height="400"/>
        </div>

        <div class="p-2">
          <h2>{{ movie.Title }}</h2>
          <hr style="background-color: #43d5cb; border-width: 4px;">
            <p>Año: {{ movie.Year }}</p>
            <p>imdbID: {{ movie.imdbID }}</p>
            <p>Tipo: {{ movie.Type }}</p>
          <hr style="background-color: #43d5cb; border-width: 4px;">  
        </div>
      </div>
      <div class="d-flex container-fluid justify-content-end pb-2 mt-n2">
        <a href="'https://www.imdb.com/title/' + movie.imdbID"
          target="_blank"
          class="btn btn-outline-info">Información</a>
      </div>
    </div>
  </div>
</section>
</template>

<script>
import axios from "axios";

export default {
  name: "SectionApi",
  data() {
    return {
      movies: null,
    };
  },
  mounted() {
    axios
      .get(
        'http://www.omdbapi.com/?s=Fast+and+Furious&type=movie&apikey=fc5c19bb'
      )
      .then((response) => {
        this.movies = response.data.Search.slice(0, 4);
        console.log(this.movies);
      });
  },
};
</script>
<style>

</style>

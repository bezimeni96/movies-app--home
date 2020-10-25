<template>
  <div class="card-deck">
    <movie-row v-for="movie in movies" :key="movie.id" :movie=movie />
  </div>
</template>

<script>
import { store } from '../store/movieStore';
import { mapGetters } from 'vuex';
import MovieRow from '../components/MovieRow';

export default {
  name: "AppMovies",

  components: {
    MovieRow,
  },

  computed: {
    ...mapGetters([
      'movies'
    ])
  },

  created() {
    this.movies;
  },

  beforeRouteEnter(to, from, next) {
    store.dispatch('fetchMovies').then(() => next());
  }
}
</script>

<style scoped>
.card-deck {
  width: 90%;
  justify-content: center;
  align-items:inherit;
  display: flex;
  flex-wrap: wrap;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 50px;
  margin-top: 0;
}
</style>
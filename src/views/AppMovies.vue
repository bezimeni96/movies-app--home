<template>
<div>
  <div v-if="!filteredMovies.length" class="alert alert-danger" role="alert">
    <p>Sorry!</p>
    <p>We don't have any movie with that search input.</p>
    <p>Please, try something else. Thanks!</p>
  </div>
  <div v-else class="card-deck">
    <movie-row v-for="movie in filteredMovies" :key="movie.id" :movie=movie />
  </div>

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
      'filteredMovies'
    ])
  },

  created() {
    this.filteredMovies;
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
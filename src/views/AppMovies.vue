<template>
<div>
  <div v-if="filteredMovies.length">
    <div>
      <p>Number of selected movies: {{ selectedMovies.length }}</p>
      <button type="button" class="btn btn-success" @click="selectAll">Select all</button>
      <button type="button" class="btn btn-danger" @click="deselectAll">Deselect all</button>
    </div>
    <div class="card-deck">
      <movie-row v-for="movie in filteredMovies" :key="movie.id" :movie=movie :isSelected="isMovieSelected(movie)" @movie-selected="handleMovieSelected"/>
    </div>
  </div>

  <div  v-else  class="alert alert-danger" role="alert">
    <p>Sorry!</p>
    <p>We don't have any movie with that search input.</p>
    <p>Please, try something else. Thanks!</p>
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

  data() {
    return {
      selectedMovies: [],
    }
  },

  computed: {
    ...mapGetters([
      'filteredMovies'
    ])
  },

  methods: {
    isMovieSelected(movie) {
      const value = (this.selectedMovies.includes(movie) ? true : false);
      return value;
    },

    handleMovieSelected(movie) {
      if (this.isMovieSelected(movie)) return;
      this.selectedMovies.push(movie);
    },

    selectAll() {
      this.selectedMovies = [...this.filteredMovies];
    },

    deselectAll() {
      this.selectedMovies = [];
    }
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

.btn {
  margin: 0 15px;
}
</style>
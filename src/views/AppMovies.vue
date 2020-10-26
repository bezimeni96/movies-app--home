<template>
<div>
  <div v-if="filteredMovies.length">
    <div>
      <p>Number of selected movies: {{ selectedMovies.length }}</p>
      <button type="button" class="btn btn-success" @click="selectAll">Select all</button>
      <button type="button" class="btn btn-danger" @click="deselectAll">Deselect all</button>
    </div>

    <div style="margin-top:20px">
      <span>Sort movies by: </span>
      <select v-model="sortingCriteria">
        <option disabled >Select method..</option>
        <option value="title" selected>Title</option>
        <option value="duration">Duration</option>
      </select>
      <button class="btn btn-secondary btn-sort" @click="changeSortingDirection" :value="sortingDirection">{{ (sortingDirection == -1 ? 'desc' : 'asc') }}</button>
    </div>

    <div class="card-deck">
      <movie-row v-for="movie in moviesPage" :key="movie.id" :movie=movie :isSelected="isMovieSelected(movie)" @movie-selected="handleMovieSelected"/>
    </div>

    <pagination style="margin:20px"
      :numOfItems="sortedFilteredMovies.length"
      @current-page-changed="goToPage"
    />
  </div>

  <div v-else  class="alert alert-danger" role="alert">
    <p>Sorry!</p>
    <p>We don't have any movie with that search input.</p>
    <p>Please, try something else. Thanks!</p>
  </div>
  

</div>
</template>

<script>
import { store } from '../store/movieStore';
import { mapGetters, mapMutations } from 'vuex';
import MovieRow from '../components/MovieRow';
import pagination from '../components/paginations';

export default {
  name: "AppMovies",

  components: {
    MovieRow,
    pagination
  },

  data() {
    return {
      selectedMovies: [],
      sortingCriteria: 'title',
      sortingDirection: -1,
    }
  },

  computed: {
    ...mapGetters([
      'filteredMovies',
      'currentPage',
      'PAGE_SIZE'                             
    ]),

    sortedFilteredMovies() {
      this.goToPage(1);
      return this.filteredMovies
        .map((movie) => movie)
        .sort((movieA, movieB) => 
          movieA[this.sortingCriteria] < movieB[this.sortingCriteria]
            ? this.sortingDirection
            : -1 * this.sortingDirection
        );
    },

    moviesPage() {
      return this.sortedFilteredMovies.slice(
        (this.currentPage - 1) * this.PAGE_SIZE,
        this.currentPage * this.PAGE_SIZE
      );
    }
  },

  methods: {
    ...mapMutations([
      'setCurrentPage',
      'setPAGE_SIZE'
    ]),

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
    },

    changeSortingDirection() {
      this.sortingDirection *= -1;
    },

    goToPage(page) {
      this.setCurrentPage(page);
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

.btn-sort{
  width: 100px;
}
</style>
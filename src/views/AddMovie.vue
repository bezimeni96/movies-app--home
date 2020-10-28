<template>
  <div class="container">
    <div v-if="errors.length !== 0" class="alert alert-danger">
      <p v-for="error in errors" :key="error.id">{{ error[0] }} </p>
    </div>

    <form @submit.prevent="addingMovie">
      <div class="form-group">
        <label for="title">Movie title:</label>
        <input type="text" class="form-control" id="title" placeholder="Add movie title.." v-model="movie.title">
      </div>

      <div class="form-group">
        <label for="director">Movie director:</label>
        <input type="text" class="form-control" id="director" placeholder="Add movie director.." v-model="movie.director">
      </div>

      <div class="form-group">
        <label for="imageUrl">Movie image url:</label>
        <input type="text" class="form-control" id="imageUrl" placeholder="Add movie image url.." v-model="movie.imageUrl">
      </div>

      <div class="form-group">
        <label for="duration">Movie duration:</label>
        <input type="number" class="form-control" id="duration" placeholder="Add movie duration.." v-model="movie.duration">
      </div>

      <div class="form-group">
        <label for="releaseDate">Movie release date:</label>
        <input type="text" class="form-control" id="releaseDate" placeholder="Add movie release date.." v-model="movie.releaseDate">
      </div>

      <div class="form-group">
        <label for="genre">Movie genre:</label>
        <input type="text" class="form-control" id="genre" placeholder="Add movie genre.." v-model="movie.genre">
      </div>

      <button type="submit" class="btn btn-primary">Submit</button>
    </form>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: "AddMovie",

  data() {
    return {
      movie: {
        title: '',
        director: '',
        imageUrl: '',
        duration: '',
        releaseDate: '',
        genre: ''
      },
      errors: [],
    }
  },

  methods: {
    ...mapActions([
      'addMovie'
    ]),

    async addingMovie() {
        const errorResponse = await this.addMovie(this.movie);
        if (!errorResponse) {
          this.$router.push('/movies');
        } else {
          this.errors = errorResponse;
        }
    }
  }
}
</script>

<style scoped>
.container {
  width: 90%;
  text-align: left;
  font-size: 18px;
}
</style>
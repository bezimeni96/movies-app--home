<template>
  <nav class="navbar" id="nav">
    <div>
      <router-link to="/" class="navbar-brand">Home</router-link> |
      <router-link to="/about" class="navbar-brand">About</router-link> |
      <router-link to="/movies" class="navbar-brand">Movies</router-link>
    </div>
      <movie-search />
  </nav>
</template>

<script>
import MovieSearch from '../MovieSearch';

export default {
  name: "navbar",

  components: {
    MovieSearch,
  }
}
</script>

<style scoped>
</style>

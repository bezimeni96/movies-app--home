<template>
  <nav class="navbar" id="nav">
    <div>
      <router-link to="/" class="navbar-brand">Home</router-link>
      <router-link to="/about" class="navbar-brand">About</router-link>
      <router-link to="/movies" class="navbar-brand">Movies</router-link>
      <router-link to="/add" class="navbar-brand">Add movie</router-link>
      <a v-if="token.length" class="navbar-brand pointer"  @click.prevent="logoutUser">Logout</a>
      <div v-else>
        <router-link to="/login" class="navbar-brand">Login</router-link>
        <router-link to="/register" class="navbar-brand">Register</router-link>
      </div>
    </div>
      <movie-search />
  </nav>
</template>

<script>
import MovieSearch from '../MovieSearch';
import { mapGetters, mapMutations } from 'vuex';

export default {
  name: "navbar",

  components: {
    MovieSearch,
  },

  computed:{
    ...mapGetters([
      'user',
      'token',
      'isUserSetted'
    ]),

  },

  methods: {
    ...mapMutations([
      'resetTokenUser'
    ]),

    logoutUser() {
      localStorage.removeItem('token');
      this.resetTokenUser();
      this.$router.push('/login');
    }
  },
}
</script>

<style scoped>
.pointer{ 
  cursor: pointer;
}
</style>

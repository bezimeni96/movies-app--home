<template>
  <div>
    <div id="nav" class="navbar navbar-brand">
      <router-link to="/" class="navbar-brand">Home</router-link> |
      <router-link to="/about" class="navbar-brand">About</router-link> |
      <router-link to="/movies" class="navbar-brand">Movies</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "navbar"
}
</script>

<style scoped>
</style>

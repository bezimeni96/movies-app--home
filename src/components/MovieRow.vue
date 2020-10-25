<template>
  <div class="card">
    <img class="card-img-top" :src=movie.imageUrl :alt=movie.title>
    <div class="card-body">
      <h5 class="card-title">{{ movie.title }}</h5>
      <p class="card-text">director: <br> {{ movie.director }}</p>
      <p class="card-text">duration: <br> {{ movie.duration }}min</p>
      <p class="card-text">release year: <br> {{ movie.releaseDate }}</p>
      <p class="card-text">genre: <br> {{ movie.genre }}</p>
    </div>
    <!-- <div class="card-footer">
      <small class="text-muted">Last updated 3 mins ago</small>
    </div> -->
  </div>
</template>

<script>
export default {
  name: "MovieRow",

  props: {
    movie: Object
  }
}
</script>

<style scoped>

.card {
  min-width: 240px;
  max-width: 240px;
  margin-top: 30px;
}

</style>
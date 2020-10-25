export const mutations = {
  setMovies(state, payload) {
    console.log(payload);
    state.movies = payload;
  }
}
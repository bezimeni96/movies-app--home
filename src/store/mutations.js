export const mutations = {
  setMovies(state, payload) {
    state.movies = payload;
  },

  setSearchText(state, payload) {
    state.searchText = payload;
  }
}
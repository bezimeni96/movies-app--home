export const mutations = {
  setMovies(state, payload) {
    state.movies = payload;
  },

  setSearchText(state, payload) {
    state.searchText = payload;
  },

  setCurrentPage(state, payload) {
    state.currentPage = payload;
  },

  setPAGE_SIZE(state, payload) {
    state.PAGE_SIZE = payload;
  },

  setUser(state, payload) {
    state.user = payload;
  },

  setToken(state, payload) {
    state.token = payload
  },

  resetTokenUser(state) {
    state.token = '';
    state.user = {};
  }
}
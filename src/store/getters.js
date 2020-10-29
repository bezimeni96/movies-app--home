export const getters = {
  movies: ({ movies }) => movies,

  searchText: ({ searchText }) => searchText,

  filteredMovies(state) {
    return state.movies.filter( (movie) => movie.title.toLowerCase().includes(state.searchText.toLowerCase()));
  },

  currentPage: ({ currentPage }) => currentPage,

  PAGE_SIZE: ({ PAGE_SIZE }) => PAGE_SIZE,

  user: ({ user }) => user,

  token: ({ token }) => token,

  isUserSetted: ({ user }) => {
    console.log(user)
    if (user) return true;
    return false;
  },
}
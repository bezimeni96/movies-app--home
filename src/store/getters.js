export const getters = {
  movies: ({ movies }) => movies,

  searchText: ({ searchText }) => searchText,

  filteredMovies(state) {
    return state.movies.filter( (movie) => movie.title.toLowerCase().includes(state.searchText.toLowerCase()));
  }
}
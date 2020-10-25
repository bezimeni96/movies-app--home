import { moviesServices } from '../services/moviesServices';

export const actions = {
  async fetchMovies(state) {
    const { data } = await moviesServices.getAll();
    state.commit('setMovies', data)
  }
}
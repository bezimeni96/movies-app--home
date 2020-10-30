import { moviesServices } from '../services/moviesServices';
import { authService } from '../services/AuthService';

export const actions = {
  async fetchMovies(state) {
    const { data } = await moviesServices.getAll();
    state.commit('setMovies', data)
  },

  async addMovie(state, payload) {
    try {
      await moviesServices.add(payload);
    } catch (error) {
      return error.response.data.errors;
      
    }
  },

  async login(state, payload) {
      const response = await authService.login(payload);
      return response;
  },

  async registerUser(state, payload) {
    try {
      await authService.register(payload);
    } catch (error) {
      return error.response.data.errors;
      
    }
  },
}
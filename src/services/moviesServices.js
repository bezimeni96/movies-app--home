import axios from 'axios';

export default class MoviesServices {
  constructor() {
    this.apiClient = axios.create({
      baseURL: 'http://localhost:3000/api',
      timeout: 1000,
    })
  }
}

export const moviesServices = new MoviesServices()

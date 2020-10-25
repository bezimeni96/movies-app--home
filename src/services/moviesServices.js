import axios from 'axios';

export default class MoviesServices {
  constructor() {
    this.apiClient = axios.create({
      baseURL: 'http://localhost:3000/api',
      timeout: 1000,
    })
  }

  getAll() {
    return this.apiClient.get('/movies');
    // return ['hello', 'it me'];
  }
}

export const moviesServices = new MoviesServices()

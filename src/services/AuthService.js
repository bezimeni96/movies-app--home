import AxiosService from './AxiosService';

export default class AuthService extends AxiosService {
  login(credentials) {
    return this.apiClient.post('/login', credentials)
  }

  register(user) {
    return this.apiClient.post('/register', user);
  }
}

export const authService = new AuthService();
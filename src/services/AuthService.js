import AxiosService from './AxiosService';

export default class AuthService extends AxiosService {
  login(credentials) {
    return this.apiClient.post('/login', credentials)
  }
}

export const authService = new AuthService();
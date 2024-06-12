// src/services/authService.js
import axios from './http-common';

const API_URL = '/auth'; 

class AuthService {
  login(user) {
    return axios.post(`${API_URL}/login`, {
      email: user.email,
      senha: user.senha
    })
    .then(response => {
      if (response.data.token) {
        localStorage.setItem('user', JSON.stringify(response.data));
      }
      return response.data;
    });
  }

  logout() {
    localStorage.removeItem('user');
  }

  getCurrentUser() {
    return JSON.parse(localStorage.getItem('user'));
  }
}

export default new AuthService();

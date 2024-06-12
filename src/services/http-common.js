// src/services/http-common.js
import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://localhost:7024', // Certifique-se de que esta é a URL correta do backend
  headers: {
    'Content-Type': 'application/json',
  }
});

instance.interceptors.request.use(config => {
  const user = JSON.parse(localStorage.getItem('user'));
  if (user && user.token) {
    config.headers.Authorization = `Bearer ${user.token}`;
  }
  return config;
});

export default instance;

// src/services/userService.js
import http from './http-common';

class UserService {
  getProtectedResource() {
    return http.get('/protected-resource');
  }
}

export default new UserService();

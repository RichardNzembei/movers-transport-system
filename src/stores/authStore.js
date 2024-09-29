// stores/authStore.js
import { defineStore } from 'pinia';

export const useAuthStore = defineStore('authStore', {
  state: () => ({
    users: [
      { email: 'admin@example.com', password: 'admin123', role: 'admin' },
      { email: 'farmer@example.com', password: 'farmer123', role: 'farmer' },
    ],
    authenticatedUser: null,
  }),
  actions: {
    authenticateUser({ email, password, role }) {
      const user = this.users.find(
        (u) => u.email === email && u.password === password && u.role === role
      );

      if (user) {
        this.authenticatedUser = user;
        localStorage.setItem('authenticatedUser', JSON.stringify(user));
        return true;
      } else {
        return false;
      }
    },
    logout() {
      this.authenticatedUser = null;
      localStorage.removeItem('authenticatedUser');
    },
    getAuthenticatedUser() {
      const storedUser = localStorage.getItem('authenticatedUser');
      if (storedUser) {
        this.authenticatedUser = JSON.parse(storedUser);
      }
      return this.authenticatedUser;
    },
  },
});

// stores/authStore.js
import { defineStore } from 'pinia';

export const useAuthStore = defineStore('authStore', {
  state: () => ({
    authenticatedUser: null,
  }),
  actions: {
    authenticateUser({ email, password, role }) {
      const farmers = JSON.parse(localStorage.getItem('farmers')) || [];
      console.log('Input Email:', email);
      console.log('Input Password:', password);
      console.log('Input Role:', role);
      console.log('Farmers Data:', farmers);
      
      const user = farmers.find(
        (u) => u.email === email && u.password === password && u.role === role // Ensure 'password' is correctly referenced
      );

      if (user) {
        this.authenticatedUser = user;
        localStorage.setItem('authenticatedUser', JSON.stringify(user));
        return true;
      } else {
        return false; // Handle incorrect login
      }
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

<!-- Login.vue -->
<template>
    <div class="login-container">
      <h2>Login</h2>
      <form @submit.prevent="login">
        <div>
          <label>Email</label>
          <input type="email" v-model="email" required />
        </div>
        <div>
          <label>Password</label>
          <input type="password" v-model="password" required />
        </div>
        <div>
          <label>Role</label>
          <select v-model="role" required>
            <option value="admin">Admin</option>
            <option value="farmer">Farmer</option>
          </select>
        </div>
        <button type="submit">Login</button>
        <p v-if="error" class="error">{{ error }}</p>
      </form>
    </div>
  </template>
  
  <script>
  import { useAuthStore } from '../stores/authStore';
  import { useRouter } from 'vue-router';
  import { ref } from 'vue';
  
  export default {
    setup() {
      // Declare reactive state properties using ref
      const email = ref('');
      const password = ref('');
      const role = ref('farmer');
      const error = ref('');
  
      const authStore = useAuthStore();
      const router = useRouter();
  
      // The login function
      const login = () => {
        const isAuthenticated = authStore.authenticateUser({
          email: email.value,
          password: password.value,
          role: role.value,
        });
  
        if (isAuthenticated) {
          if (role.value === 'admin') {
            router.push('/admindashboard');
          } else if (role.value === 'farmer') {
            router.push('/farmerdashboard');
          }
        } else {
          error.value = 'Invalid email or password';
        }
      };
  
      return {
        email,
        password,
        role,
        error,
        login,
      };
    },
  };
  </script>
  
  <style scoped>
  .login-container {
    max-width: 400px;
    margin: auto;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 5px;
  }
  .error {
    color: red;
  }
  </style>
  
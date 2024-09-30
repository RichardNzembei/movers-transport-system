<template>
    <div>
      <h2>Register Farmer</h2>
      <form @submit.prevent="registerFarmer">
        <input v-model="farmer.name" placeholder="Name" />
        <input v-model="farmer.email" placeholder="Email" />
        <button type="submit">Register</button>
      </form>
    </div>
  </template>
  
  <script>
  import { useFarmerStore } from '../stores/farmerStote';
  
  export default {
    setup() {
      const farmerStore = useFarmerStore();
      const farmer = { name: '', email: '' };
  
      const registerFarmer = () => {
        farmerStore.addFarmer(farmer);
        // Store in localStorage
        localStorage.setItem('farmers', JSON.stringify(farmerStore.farmers));
      };
  
      return {
        farmer,
        registerFarmer
      };
    }
  };
  </script>
  
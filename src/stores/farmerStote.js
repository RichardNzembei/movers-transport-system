// stores/farmerStore.js
import { defineStore } from 'pinia';

export const useFarmerStore = defineStore('farmerStore', {
  state: () => ({
    farmers: JSON.parse(localStorage.getItem('farmers')) || [],
  }),
  actions: {
    addFarmer(farmer) {
      this.farmers.push({ ...farmer, id: Date.now() });
    },
  },
});

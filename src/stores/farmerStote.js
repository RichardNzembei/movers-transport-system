// stores/farmerStore.js
import { defineStore } from 'pinia';

export const useFarmerStore = defineStore('farmerStore', {
  state: () => ({
    farmers: []
  }),
  actions: {
    addFarmer(farmer) {
      this.farmers.push(farmer);
    },
    // Optionally, you can load farmers from local storage when the store is created
    loadFarmers() {
      const storedFarmers = JSON.parse(localStorage.getItem('farmers')) || [];
      this.farmers = storedFarmers;
    }
  }
});

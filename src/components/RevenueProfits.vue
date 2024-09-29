<template>
    <div>
      <h2>Revenue and Profits</h2>
      <form @submit.prevent="calculateProfit">
        <input v-model.number="revenue" placeholder="Revenue" />
        <input v-model.number="costs" placeholder="Costs" />
        <button type="submit">Calculate Profit</button>
      </form>
  
      <div v-if="profit !== null">
        <p>Profit: {{ profit }}</p>
      </div>
    </div>
  </template>
  
  <script>
  import { ref } from 'vue';
  
  export default {
    setup() {
      const revenue = ref(0);
      const costs = ref(0);
      const profit = ref(null);
  
      const calculateProfit = () => {
        profit.value = revenue.value - costs.value;
      };
  
      return {
        revenue,
        costs,
        profit,
        calculateProfit
      };
    }
  };
  </script>
  
<script setup>
import adminNav from "./adminNav.vue";
</script>
<template>
  <adminNav/>
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
  

  
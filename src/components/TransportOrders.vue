<script setup>
import adminNav from './adminNav.vue';
</script>
<template>
  <adminNav/>
  <div>
    <h2>Transport Orders</h2>
    <form @submit.prevent="addOrder">
      <input  placeholder="Goods" />
      <input  placeholder="Vehicle" />
      <button type="submit">Add Order</button>
    </form>

    <table>
      <thead>
        <tr>
          <th>Goods</th>
          <th>Vehicle</th>
          <th>Status</th>
        </tr>
      </thead>
    
    </table>
  </div>
</template>
  

  
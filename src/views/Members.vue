<template>
    <div>
      <h2>Members Management</h2>
      <DataTable :items="members" :headers="['id', 'name', 'registration_date']" />
      <!-- Include a form for adding new members -->
    </div>
  </template>
  
  <script>
  import { ref, onMounted } from 'vue';
  import DataTable from '../components/DataTable.vue';
 
  

  </script>
  
  <style scoped>
  /* Add your styles here */
  </style>
s  
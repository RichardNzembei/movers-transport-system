<script setup>
import adminNav from './adminNav.vue';
</script>

<template>
  <adminNav/>
  <div>
    <h2>Employee Management</h2>
    <form @submit.prevent="addEmployee">
      <input placeholder="Employee Name" />
      <input  placeholder="Role" />
      <button type="submit">Add Employee</button>
    </form>

    <ul>
  
    </ul>
  </div>
</template>
  
 
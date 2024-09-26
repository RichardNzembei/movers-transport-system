<template>
    <table>
      <thead>
        <tr>
          <th v-for="header in headers" :key="header">{{ header }}</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in items" :key="item.id">
          <td v-for="key in headers" :key="key">{{ item[key] }}</td>
        </tr>
      </tbody>
    </table>
  </template>
  
  <script>
  export default {
    name: 'DataTable',
    props: {
      items: Array,
      headers: Array,
    },
  };
  </script>
  
  <style scoped>
  /* Add your styles here */
  </style>
s  
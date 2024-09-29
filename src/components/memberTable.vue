<script setup>
import { ref } from "vue";
const props = defineProps({
  members: {
    type: Array,
    required: true,
  },
});
</script>

<template>
  <div>
    <table>
      <thead>
        <tr>
          <th>Id No</th>
          <th>Name</th>
          <th>Shares</th>
          <th>Contributions</th>
          <th>Orders</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="member in members" :key="member.Id">
          <td>{{ member.Id }}</td>
          <td>{{ member.name }}</td>
          <td>{{ member.share }}</td>
          <td>{{ member.contribution }}</td>
          <td>{{ member.order }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style scoped>
table,
th,
td {
  border: 1px solid black;
  border-collapse: collapse;
  text-align: left;
  padding: 2px;
  margin: 3px;
}

th {
  background-color: #f2f2f2;
}

tbody tr:hover {
  background-color: #f1f1f1;
}
</style>

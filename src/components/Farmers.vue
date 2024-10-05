<script setup>
import adminNav from './adminNav.vue';
const storedFarmers = JSON.parse(localStorage.getItem("farmers")) || [];
const fullname=storedFarmers.fName +''+ storedFarmers.lName
</script>
<template>
<adminNav/>
<h3 v-if="storedFarmers.length>0">welcome to farmers</h3>    
<div class="farmers-list">
<table>
    <tr>
        <th>name</th>
        <th>gender</th>
        <th>email</th>
        <th>country</th>
        <th>county</th>
 
        <th>province</th>
        <th>sub-county</th>
        <th>farm type</th>
        <th>produce</th>
    </tr>
    <tr v-for="farmer in storedFarmers" :key="farmer.NationalId">
        <td>{{ farmer.fName +' '+farmer.lName }}</td>
        <td>{{ farmer.Selected }}</td>
        <td>{{ farmer.email }}</td>
        <td>{{ farmer.country }}</td>
        <td>{{ farmer.county }}</td>
        <td>{{ farmer.province }}</td>
        <td>{{ farmer.subcounty }}</td>
        <td>{{ farmer.type }}</td>
        <td>{{ farmer.produce }}</td>

    </tr>
</table>
</div>
</template>
<style scoped>
table,td,th{
    border: 1px solid black;
    border-collapse: collapse;
    padding: 30px;
}
</style>
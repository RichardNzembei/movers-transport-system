<script setup>
import adminNav from './adminNav.vue';
const storedFarmers = JSON.parse(localStorage.getItem("farmers")) || [];
const fullname=storedFarmers.fName +''+ storedFarmers.lName
</script>

<template>
    <div >
      <adminNav />
      <h3  class="text-2xl font-semibold mb-4">Farmers List</h3>

      <div class="farmers-list overflow-x-auto" v-if="storedFarmers.length > 0">
        <table class="min-w-full border border-gray-300">
          <thead>
            <tr class="bg-gray-200">
              <th class="border border-gray-300 px-4 py-2">Name</th>
              <th class="border border-gray-300 px-4 py-2">Gender</th>
              <th class="border border-gray-300 px-4 py-2">Email</th>
              <th class="border border-gray-300 px-4 py-2">Country</th>
              <th class="border border-gray-300 px-4 py-2">County</th>
              <th class="border border-gray-300 px-4 py-2">Province</th>
              <th class="border border-gray-300 px-4 py-2">Sub-County</th>
              <th class="border border-gray-300 px-4 py-2">Farm Type</th>
              <th class="border border-gray-300 px-4 py-2">Produce</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="farmer in storedFarmers" :key="farmer.NationalId" class="hover:bg-blue-100 odd:bg-white even:bg-slate-50">
              <td class="border border-gray-300 px-4 py-2">{{ farmer.fName + ' ' + farmer.lName }}</td>
              <td class="border border-gray-300 px-4 py-2">{{ farmer.Selected }}</td>
              <td class="border border-gray-300 px-4 py-2">{{ farmer.email }}</td>
              <td class="border border-gray-300 px-4 py-2">{{ farmer.country }}</td>
              <td class="border border-gray-300 px-4 py-2">{{ farmer.county }}</td>
              <td class="border border-gray-300 px-4 py-2">{{ farmer.province }}</td>
              <td class="border border-gray-300 px-4 py-2">{{ farmer.subcounty }}</td>
              <td class="border border-gray-300 px-4 py-2">{{ farmer.type }}</td>
              <td class="border border-gray-300 px-4 py-2">{{ farmer.produce }}</td>
            </tr>
          </tbody>
        </table>
        
      </div>
      <div v-else class="text-red-500 mt-4">No farmers found.</div>
    </div>
  </template>
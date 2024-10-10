<script setup>
import { ref } from "vue";
import FarmerNav from "./FarmerNav.vue";

const storedFarmers = JSON.parse(localStorage.getItem("farmers")) || [];
const loggedInEmail = localStorage.getItem("loggedInUserEmail");
const currentFarmer = ref(null);

if (loggedInEmail) {
  currentFarmer.value = storedFarmers.find(
    (farmer) => farmer.email === loggedInEmail
  );
}
</script>

<template>
  <FarmerNav />
  <div class="section basic-info bg-yellow-100 p-5 mb-5 rounded shadow-md">
    <div class="category bg-yellow-500 relative top-0">
      <h3 class="text-lg font-bold text-white p-2">Farmer Information</h3>
    </div>

    <div class="info-content flex flex-col lg:flex-row justify-between mt-4">
      <div class="profile-pic border-r border-black pr-5">
        <img
          src="../assets/icons/profile-icon.png"
          alt="Profile Picture"
          class="w-24 h-24 rounded-full border-b border-black mt-10"
        />
      </div>

      <div class="info-details flex-1 px-6 border-b border-black">
        <p class="mb-2">
          <strong
            class="info-label inline-block mr-12 font-mono font-bold text-lg"
            >Name</strong
          >
          <span class="info-data text-brown-600">{{
            currentFarmer
              ? (currentFarmer.fName + " " + currentFarmer.lName).toUpperCase()
              : "N/A"
          }}</span>
        </p>
        <p class="mb-2">
          <strong
            class="info-label inline-block mr-12 font-mono font-bold text-lg"
            >ID No</strong
          >
          <span class="info-data text-brown-600">{{
            currentFarmer ? currentFarmer.NationalId : "N/A"
          }}</span>
        </p>
        <p class="mb-2">
          <strong
            class="info-label inline-block mr-12 font-mono font-bold text-lg"
            >Gender</strong
          >
          <span class="info-data text-brown-600">{{
            currentFarmer ? currentFarmer.Selected.toUpperCase() : "N/A"
          }}</span>
        </p>
        <p class="mb-2">
          <strong
            class="info-label inline-block mr-12 font-mono font-bold text-lg"
            >Email</strong
          >
          <span class="info-data text-brown-600">{{
            currentFarmer ? currentFarmer.email : "N/A"
          }}</span>
        </p>
      </div>

      <div class="info-details flex-1 px-6 border-b border-black">
        <p class="mb-2">
          <strong
            class="info-label inline-block mr-12 font-mono font-bold text-lg"
            >County</strong
          >
          <span class="info-data text-brown-600">{{
            currentFarmer ? currentFarmer.county.toUpperCase() : "N/A"
          }}</span>
        </p>
        <p class="mb-2">
          <strong
            class="info-label inline-block mr-12 font-mono font-bold text-lg"
            >Farm Type</strong
          >
          <span class="info-data text-brown-600">{{
            currentFarmer ? currentFarmer.type.toUpperCase() : "N/A"
          }}</span>
        </p>
        <p class="mb-2">
          <strong
            class="info-label inline-block mr-12 font-mono font-bold text-lg"
            >Produce</strong
          >
          <span class="info-data text-brown-600">{{
            currentFarmer ? currentFarmer.produce.toUpperCase() : "N/A"
          }}</span>
        </p>
        <p class="mb-2">
          <strong
            class="info-label inline-block mr-12 font-mono font-bold text-lg"
            >Total Orders</strong
          >
          <span class="info-data text-brown-600">{{
            currentFarmer ? currentFarmer.totalOrders : "N/A"
          }}</span>
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.text-brown-600 {
  color: rgb(141, 110, 71);
}
</style>

<script setup>
import { ref } from "vue";
import { useDropdownStore } from "../stores/dropdownStore";
import { useRouter } from "vue-router";

const router = useRouter();
const store = useDropdownStore();

const currentFarmer = ref(null);
const storedFarmers = JSON.parse(localStorage.getItem("farmers")) || [];
const loggedInEmail = localStorage.getItem("loggedInUserEmail");

if (loggedInEmail) {
  currentFarmer.value = storedFarmers.find(
    (farmer) => farmer.email === loggedInEmail
  );
}

const logout = () => {
  localStorage.removeItem("loggedInUserEmail");
  router.push("/");
};

const toFarmerProfile = () => {
  router.push("/farmerprofile");
};
</script>

<template>
  <nav class="flex justify-between items-center bg-gray-200 p-4">
    <div class="flex items-center">
      <img
        src="../assets/icons/menu.png"
        alt="menu icon"
        @click="store.toggleDropdown"
        class="cursor-pointer mr-3 w-7 h-7"
      />
      <img
        @click="toFarmerProfile"
        src="../assets/icons/admin-icon.png"
        alt="profile-icon"
        class="cursor-pointer mr-3 w-7 h-7 rounded-full border border-white"
      />
      <span
        class="text-xl text-black mr-4 cursor-pointer"
        @click="toFarmerProfile"
      >
        {{ currentFarmer ? currentFarmer.fName.toUpperCase() : 'Farmer' }}
      </span>
    </div>

    <div class="flex items-center" @click="logout">
      <img
        src="../assets/icons/logout.png"
        alt="logout icon"
        class="cursor-pointer mr-2 w-7 h-7 rounded-full border border-white"
      />
      <span class="cursor-pointer text-xl text-black">Logout</span>
    </div>

    <div
      v-if="store.isDropdownVisible"
      class="fixed top-0 left-0 w-64 h-96 bg-gray-100 shadow-lg p-6 z-50 transition-all duration-700 ease-in-out"
    >
      <div class="flex justify-between items-center pb-4 border-b border-black">
        <span>Contents</span>
        <button @click="store.toggleDropdown" class="text-lg cursor-pointer">
          X
        </button>
      </div>

      <div class="flex items-center mt-6">
        <img
          src="../assets/icons/home.png"
          alt="home icon"
          class="cursor-pointer mr-3 w-6 h-6 rounded-full border border-white"
        />
        <router-link
          to="/farmerdashboard"
          class="text-black no-underline hover:text-blue-500"
        >
          Home
        </router-link>
      </div>

      <div class="flex items-center mt-6">
        <img
          src="../assets/icons/orders.png"
          alt="orders icon"
          class="cursor-pointer mr-3 w-6 h-6 rounded-full border border-white"
        />
        <router-link
          to="/farmerorder"
          class="text-black no-underline hover:text-blue-500"
        >
          Orders
        </router-link>
      </div>
    </div>
  </nav>
</template>


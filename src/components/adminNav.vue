<script setup>
import { ref } from "vue";
import { useDropdownStore } from "../stores/dropdownStore";
import { useRouter } from "vue-router";

const router = useRouter();
const store = useDropdownStore();

const currentAdmin = ref(null);

const storedAdmins = JSON.parse(localStorage.getItem("admins")) || [];

const loggedInEmail = localStorage.getItem("loggedInUserEmail");

if (loggedInEmail) {
  currentAdmin.value = storedAdmins.find(
    (admin) => admin.email === loggedInEmail
  );
}

const logout = () => {
  localStorage.removeItem("loggedInUserEmail");
  router.push("/");
};
const toadminprofile = () => {
  router.push("/adminprofile");
};
</script>

<template>
  <nav class="flex justify-between items-center bg-gray-300 p-4">
    <div class="flex items-center">
      <img
        src="../assets/icons/menu.png"
        alt="menu icon"
        @click="store.toggleDropdown"
        class="cursor-pointer mr-3 w-7 h-7"
      />
      <img
        @click="toadminprofile"
        src="../assets/icons/admin-icon.png"
        alt="profile-icon"
        class="cursor-pointer mr-3 w-7 h-7 rounded-full border border-white"
      />
      <span class="text-xl text-black mr-4" @click="toadminprofile">
        {{ currentAdmin.fName.toUpperCase() }}
      </span>
    </div>
    <div class="flex items-center cursor-pointer" @click="logout">
      <img
        src="../assets/icons/logout.png"
        alt="logout icon"
        class="w-7 h-7 rounded-full border border-white mr-2"
      />
      <span class="text-xl text-black">Logout</span>
    </div>

    <div
      class="fixed top-0 left-0 w-64 h-full bg-gray-300 shadow-lg p-5 transition-transform transform"
      :class="{
        'translate-x-0': store.isDropdownVisible,
        '-translate-x-full': !store.isDropdownVisible,
      }"
    >
      <div class="flex justify-between items-center mb-4">
        <span class="font-semibold">Contents</span>
        <button @click="store.toggleDropdown" class="text-lg">X</button>
      </div>
      <div class="flex items-center mb-4">
        <img
          src="../assets/icons/home.png"
          alt="home icon"
          class="w-6 h-6 mr-2"
        />
        <router-link to="/admindashboard" class="block text-black"
          >Home</router-link
        >
      </div>
      <div class="flex items-center mb-4">
        <img
          src="../assets/icons/members.png"
          alt="employees icon"
          class="w-6 h-6 mr-2"
        />
        <router-link to="/employeedashboard" class="block text-black"
          >Employees</router-link
        >
      </div>
      <div class="flex items-center mb-4">
        <img
          src="../assets/icons/members.png"
          alt="farmers icon"
          class="w-6 h-6 mr-2"
        />
        <router-link to="/farmers" class="block text-black"
          >Farmers</router-link
        >
      </div>
      <div class="flex items-center mb-4">
        <img
          src="../assets/icons/orders.png"
          alt="transport order icon"
          class="w-6 h-6 mr-2"
        />
        <router-link to="/transportdashboard" class="block text-black"
          >Transport Orders</router-link
        >
      </div>
      <div class="flex items-center mb-4">
        <img
          src="../assets/icons/revenue.png"
          alt="revenue icon"
          class="w-6 h-6 mr-2"
        />
        <router-link to="/revenuedashboard" class="block text-black"
          >Revenue & Profits</router-link
        >
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref } from "vue";
import adminNav from "./adminNav.vue";
const storedAdmins = JSON.parse(localStorage.getItem("admins")) || [];
const loggedInEmail = localStorage.getItem("loggedInUserEmail");
const currentAdmin = ref(null);
if (loggedInEmail) {
  currentAdmin.value = storedAdmins.find(
    (admin) => admin.email === loggedInEmail
  );
}
</script>
<template>
  <adminNav />
  <div class="bg-gray-200 p-5 mb-5 rounded shadow-md">
    <div class="bg-yellow-600 p-2 rounded-t">
      <h3 class="text-white text-xl">Admin Information</h3>
    </div>

    <div class="flex justify-between mt-4">
      <div class="profile-pic">
        <img
          src="../assets/icons/profile-icon.png"
          alt="Profile Picture"
          class="w-24 h-24 rounded-full border border-black mb-4"
        />
      </div>
      <div class="flex flex-col lg:flex-row flex-grow mx-4">
        <div class="flex-1 p-2">
          <p class="mb-2">
            <strong class="font-mono font-bold text-lg mr-4">Category</strong>
            <span class="text-gray-700">{{
              currentAdmin.selected.toUpperCase()
            }}</span>
          </p>
          <p class="mb-2">
            <strong class="font-mono font-bold text-lg mr-4">Name </strong>
            <span class="text-gray-700">
              {{
                currentAdmin.fName.toUpperCase() +
                " " +
                currentAdmin.lName.toUpperCase()
              }}
            </span>
          </p>
          <p class="mb-2">
            <strong class="font-mono font-bold text-lg mr-4">ID No </strong>
            <span class="text-gray-700">{{ currentAdmin.nationalId }}</span>
          </p>
          <p class="mb-2">
            <strong class="font-mono font-bold text-lg mr-4">Gender </strong>
            <span class="text-gray-700">{{
              currentAdmin.gender.toUpperCase()
            }}</span>
          </p>
        </div>
        <div class="flex-1">
          <p class="mb-2">
            <strong class="font-mono font-bold text-lg mr-4">Company ID</strong>
            <span class="text-gray-700">{{
              currentAdmin.workId.toUpperCase()
            }}</span>
          </p>
          <p class="mb-2">
            <strong class="font-mono font-bold text-lg mr-4"
              >Company Email
            </strong>
            <span class="text-gray-700">{{ currentAdmin.companyemail }}</span>
          </p>
          <p class="mb-2">
            <strong class="font-mono font-bold text-lg mr-4"
              >Personal Email</strong
            >
            <span class="text-gray-700">{{ currentAdmin.email }}</span>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>



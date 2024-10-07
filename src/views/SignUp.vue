<script setup>
import { useRouter } from "vue-router";
const router = useRouter();
</script>

<template>
  <div
    class="flex flex-col justify-center item-center min-h-screen bg-gray-100 p-7"
  >
    <div class="flex item-center space-x-4 mb-8 justify-center">
      <img
        src="../assets/img/mover.jpg"
        alt=" movers image"
        class="h-20 w-20 rounded-full sm:mx-0 sm:shrink-0 mb-2"
      />
      <h4 class="text-2xl font-bold text-blue-600 mt-6">
        Welcome to movers transport system
      </h4>
    </div>
    <div class="text-center mb-8">
      <p class="text-gray-600 mb-4">
        Its a transport system excelling in helping farmers and retailers have a
        verbose exchange of goods
      </p>
      <span class="block font-semibold text-gray-700 mb-2"
        >Our main interest is to:</span
      >
      <ul class="list-disc list-inside text-gray-700">
        <li>provide a better communication between faemers and retailers</li>
        <li>provide a cost efficient exchange of goods</li>
        <li>provide a time savingplatform</li>
      </ul>
    </div>
    <div class="text-center mb-8">
      <span class="block font-semibold text-gray-700 mb-2">
        the system has three types of users
      </span>
      <ul class="list-disc list-inside text-gray-700">
        <li>Admins</li>
        <li>Farmers</li>
        <li>Retailers</li>
      </ul>
    </div>
    <div class="text-center mb-6">
      <span class="block text-blue-700 font-medium mb-2"
        >Sign Up as
        <router-link to="/adminregistration" class="text-black hover:underline"
          >Admin</router-link
        ></span
      ><br />
      <span class="block text-blue-700 font-medium"
        >Sign Up as
        <router-link to="/farmerreg" class="text-black hover:underline"
          >Farmer</router-link
        ></span
      >
    </div>
    <div class="text-center">
      <span class="text-gray-600">
        Already have an account?
        <router-link to="/" class="text-blue-700 hover:underline"
          >Login</router-link
        >
      </span>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";

const email = ref("");
const password = ref("");
const role = ref("");
const error = ref("");
const router = useRouter();

const login = () => {
  const storedAdmins = JSON.parse(localStorage.getItem("admins")) || [];
  const storedFarmers = JSON.parse(localStorage.getItem("farmers")) || [];

  const users = [...storedAdmins, ...storedFarmers];

  const user = users.find(
    (person) =>
      person.email === email.value &&
      person.password === password.value &&
      person.role === role.value
  );

  if (user) {
    localStorage.setItem("loggedInUserEmail", user.email);

    if (role.value === "admin") {
      router.push("/admindashboard");
    } else if (role.value === "farmer") {
      router.push("/farmerdashboard");
    }
  } else {
    error.value = "Invalid email, password, or role";
  }
};
const showPassword = ref(false);
const togglepassword = () => {
  showPassword.value = !showPassword.value;
};
</script>



<template>
  <div class="min-h-screen flex justify-center items-center bg-gradient-to-r from-gray-400 to-blue-500">
    <div class="max-w-md w-full sm:mx-2">
      <div class="bg-white p-8 rounded-lg shadow-lg ">
        <h2 class="text-2xl font-bold text-blue-600 mb-6 text-center">Sign in</h2>
        <form @submit.prevent="login">
          <div class="mb-4">
            <label class="block text-gray-700 font-medium mb-2">Email</label>
            <input
             type="email" 
             v-model="email" 
             required 
             class="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
             />
          </div>
          <div class="mb-4 relative">
            <label class="block text-gray-700 font-medium mb-2">Password</label>
            <input
              :type="showPassword ? 'text' : 'password'"
              v-model="password"
              required
              class="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <span class="absolute right-3 top-9 cursor-pointer text-gray-500 border-l-4 p-2" @click="togglepassword">{{
              showPassword ? "🙈" : "👁️"
            }}</span>
          </div>
          <div class="mb-6">
            <label class="block text-gray-700 font-medium mb-2">Role</label>
            <select 
            v-model="role"
             required
             class="w-full p-3 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
             >
              <option disabled value="">Select Role</option>
            <option value="farmer">Farmer</option>
            <option value="admin">Admin</option>
            </select>
          </div>
          <button 
          type="submit"
          class="w-full bg-blue-600 rounded-lg p-2 hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
          Login
        </button>
          <p v-if="error" class="text-red-500 mt-4 text-center">{{ error }}</p>
        </form>
<div class="mt-4 text-center">
  <span>Don't have an account?</span>
  <router-link to="/signupdashboard" class="text-blue-500 hover:underline">Sign Up</router-link>
</div>
      </div>
    </div>
  </div>
</template>


 
  
  
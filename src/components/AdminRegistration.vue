<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();
const tosignup = () => {
  router.push("/signupdashboard");
};
const admin = ref({
  fName: "",
  lName: "",
  mName: "",
  nationalId: "",
  gender: "",
  email: "",
  password: "",
  selected: "",
  companyemail: "",
  workId: "",
  role: "",
});

const registerAdmin = (e) => {
  e.preventDefault();

  if (
    !admin.value.fName ||
    !admin.value.email ||
    !admin.value.password ||
    !admin.value.role
  ) {
    alert("Please fill in all the required fields.");
    return;
  }

  const existingAdmins = JSON.parse(localStorage.getItem("admins")) || [];

  existingAdmins.push({ ...admin.value });

  localStorage.setItem("admins", JSON.stringify(existingAdmins));

  Object.assign(admin.value, {
    fName: "",
    lName: "",
    mName: "",
    nationalId: "",
    gender: "",
    email: "",
    password: "",
    selected: "",
    companyemail: "",
    workId: "",
    role: "",
  });

  alert("Admin registered successfully!");
  router.push("/");
};
const showPassword = ref(false);
const togglepassword = () => {
  showPassword.value = !showPassword.value;
};
</script>

<template>
  <div class="container mx-auto p-4">
   
    <button @click="tosignup" class=" mb-4"><img src="../assets/icons/back.png" alt=""></button>

   
    <h4 class="text-2xl font-bold text-center mb-2">Admin Registration!!</h4>
    <p class="text-center text-gray-600 mb-8">Fill the form and submit</p>

    <div class="max-w-lg mx-auto">
      <div class="bg-white shadow-md rounded-lg p-6">
        <form @submit.prevent="registerAdmin">

         
          <div class="form-card mb-6">
            <h3 class="text-xl font-semibold mb-4">Personal Details</h3>

            <label for="role" class="block mb-2">Role</label>
            <select v-model="admin.role" required class="w-full p-2 border rounded-md">
              <option disabled value="">Select Role</option>
              <option value="farmer">Farmer</option>
              <option value="admin">Admin</option>
            </select>

          
            <label for="fName" class="block mt-4 mb-2">First Name</label>
            <input v-model="admin.fName" type="text" placeholder="Enter your First name" required class="w-full p-2 border rounded-md" />

        
            <label for="lName" class="block mt-4 mb-2">Last Name</label>
            <input v-model="admin.lName" type="text" placeholder="Enter your Last name" class="w-full p-2 border rounded-md" />

            
            <label for="mName" class="block mt-4 mb-2">Middle Name</label>
            <input v-model="admin.mName" type="text" placeholder="**Optional" class="w-full p-2 border rounded-md" />

           
            <label for="nationalId" class="block mt-4 mb-2">National Id No</label>
            <input v-model="admin.nationalId" type="text" placeholder="Enter your ID No" class="w-full p-2 border rounded-md" />

            <label for="gender" class="block mt-4 mb-2">Gender</label>
            <select v-model="admin.gender" required class="w-full p-2 border rounded-md">
              <option disabled value="">Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>

            <label for="email" class="block mt-4 mb-2">Email</label>
            <input v-model="admin.email" type="email" placeholder="Enter your email" required class="w-full p-2 border rounded-md" />

            
            <div class="mb-4 relative">
            <label class="block text-gray-700 font-medium mb-2">Password</label>
            <input
              :type="showPassword ? 'text' : 'password'"
              v-model="admin.password"
              required
              class="w-full p-2 border rounded-md"
            />
            <span class="absolute right-3 top-9 cursor-pointer text-gray-500 border-l-4 p-1" @click="togglepassword">{{
              showPassword ? "🙈" : "👁️"
            }}</span>
          </div>
          </div>

          
          <div class="form-card">
            <h3 class="text-xl font-semibold mb-4">Company Details</h3>

           
            <label for="selected" class="block mb-2">Category</label>
            <select v-model="admin.selected" required class="w-full p-2 border rounded-md">
              <option disabled value="">Select Category</option>
              <option value="CEO">CEO</option>
              <option value="cto">CTO</option>
              <option value="tech staff">Tech Staff</option>
              <option value="staff">Staff</option>
            </select>

         
            <label for="companyemail" class="block mt-4 mb-2">Company Email</label>
            <input v-model="admin.companyemail" type="email" placeholder="Enter your company email" class="w-full p-2 border rounded-md" />

          
            <label for="workId" class="block mt-4 mb-2">Company ID</label>
            <input v-model="admin.workId" type="text" placeholder="Enter your Company ID" class="w-full p-2 border rounded-md" />
          </div>

         
          <button type="submit" class="w-full bg-blue-500 text-white p-3 rounded-md mt-6 hover:bg-blue-600 transition">
            Register Admin
          </button>
        </form>

        
        <p class="mt-4 text-center">
          Already have an account?
          <router-link to="/" class="text-blue-500 hover:underline">Login</router-link>
        </p>
      </div>
    </div>
  </div>
</template>

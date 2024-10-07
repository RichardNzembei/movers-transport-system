<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
const router = useRouter();
const tosignup = () => {
  router.push("/signupdashboard");
};

const farmer = ref({
  fName: "",
  lName: "",
  mName: "",
  NationalId: "",
  Selected: "",
  email: "",
  password: "",
  country: "",
  county: "",
  subcounty: "",
  province: "",
  address: "",
  type: "",
  produce: "",
  role: "",
});

const registerFarmer = () => {
  if (
    farmer.value.fName &&
    farmer.value.lName &&
    farmer.value.NationalId &&
    farmer.value.Selected &&
    farmer.value.email &&
    farmer.value.password &&
    farmer.value.country &&
    farmer.value.county &&
    farmer.value.role
  ) {
    let existingFarmers = JSON.parse(localStorage.getItem("farmers")) || [];

    existingFarmers.push({ ...farmer.value });

    localStorage.setItem("farmers", JSON.stringify(existingFarmers));

    Object.assign(farmer.value, {
      fName: "",
      lName: "",
      mName: "",
      NationalId: "",
      Selected: "",
      email: "",
      password: "",
      country: "",
      county: "",
      subcounty: "",
      province: "",
      address: "",
      type: "",
      produce: "",
      role: "",
    });

    alert("Farmer registered successfully!");
    router.push("/");
  } else {
    alert("Please fill all required fields.");
  }
};
const showPassword = ref(false);
const togglepassword = () => {
  showPassword.value = !showPassword.value;
};
</script>


<template>
  <div class="container mx-auto p-4">
    <button @click="tosignup" class="mb-4">
      <img src="../assets/icons/back.png" alt="back" />
    </button>
    <h4 class="text-2xl font-bold text-center mb-2">Farmer Registration!!</h4>
    <p class="text-center text-gray-600 mb-8">Fill the form and submit</p>
    <div class="max-w-lg mx-auto">
      <div class="bg-white shadow-md rounded-lg p-6">
        <form @submit.prevent="registerFarmer">
          <div class="form-card mb-6">
            <h3 class="text-xl font-semibold mb-4">Personal Details</h3>

            <label for="role" class="block mb-2">Role</label>
            <select
              v-model="farmer.role"
              required
              class="w-full p-2 border rounded-md"
            >
              <option disabled value="">Select Role</option>
              <option value="farmer">Farmer</option>
              <option value="admin">Admin</option>
            </select>

            <label for="fName" class="block mt-4 mb-2">First Name</label>
            <input
              v-model="farmer.fName"
              type="text"
              placeholder="Enter your First name"
              required
              class="w-full p-2 border rounded-md"
            />

            <label for="lName" class="block mt-4 mb-2">Last Name</label>
            <input
              v-model="farmer.lName"
              type="text"
              placeholder="Enter your Last name"
              required
              class="w-full p-2 border rounded-md"
            />

            <label for="mName" class="block mt-4 mb-2">Middle Name</label>
            <input
              v-model="farmer.mName"
              type="text"
              placeholder="**Optional"
              class="w-full p-2 border rounded-md"
            />

            <label for="NationalId" class="block mt-4 mb-2"
              >National Id No</label
            >
            <input
              v-model="farmer.NationalId"
              type="text"
              placeholder="Enter your ID No"
              required
              class="w-full p-2 border rounded-md"
            />

            <label for="Gender" class="block mt-4 mb-2">Gender</label>
            <select
              v-model="farmer.Selected"
              required
              class="w-full p-2 border rounded-md"
            >
              <option disabled value="">Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>

            <label for="email" class="block mt-4 mb-2">Email</label>
            <input
              v-model="farmer.email"
              type="email"
              placeholder="Enter your email"
              required
              class="w-full p-2 border rounded-md"
            />

            <div class="mb-4 mt-2 relative">
              <label class="block text-gray-700 font-medium mb-2"
                >Password</label
              >
              <input
                :type="showPassword ? 'text' : 'password'"
                v-model="password"
                required
                class="w-full p-2 border rounded-md"
              />
              <span
                class="absolute right-3 top-9 cursor-pointer text-gray-500 border-l-4 p-1"
                @click="togglepassword"
                >{{ showPassword ? "🙈" : "👁️" }}</span
              >
            </div>
          </div>

          <div class="form-card">
            <h3 class="text-xl font-semibold mb-4">Location Details</h3>

            <label for="Country" class="block mt-4 mb-2">Country</label>
            <input
              v-model="farmer.country"
              type="text"
              placeholder="Enter your Country's Name"
              required
              class="w-full p-2 border rounded-md"
            />

            <label for="County" class="block mt-4 mb-2">County</label>
            <input
              v-model="farmer.county"
              type="text"
              placeholder="Enter your County's name"
              required
              class="w-full p-2 border rounded-md"
            />

            <label for="Sub-county" class="block mt-4 mb-2">Sub-County</label>
            <input
              v-model="farmer.subcounty"
              type="text"
              placeholder="Enter your Sub-county"
              class="w-full p-2 border rounded-md"
            />

            <label for="province" class="block mt-4 mb-2">Province</label>
            <input
              v-model="farmer.province"
              type="text"
              placeholder="Enter your Province"
              class="w-full p-2 border rounded-md"
            />

            <label for="address" class="block mt-4 mb-2">Address</label>
            <input
              v-model="farmer.address"
              type="text"
              placeholder="Enter your address"
              class="w-full p-2 border rounded-md"
            />
          </div>

          <div class="form-card">
            <h3 class="text-xl font-semibold mb-4 mt-4">Farmer Details</h3>

            <label for="farmType" class="block mt-4 mb-2">Farm Type</label>
            <select
              v-model="farmer.type"
              required
              class="w-full p-2 border rounded-md"
            >
              <option disabled value="">Select Farm Type</option>
              <option value="commercial">Commercial</option>
              <option value="domestic">Domestic</option>
              <option value="plantation">Plantation</option>
              <option value="indigenous">Indigenous</option>
            </select>
            <label for="produce" class="block mt-4 mb-2">Produce</label>
            <input
              v-model="farmer.produce"
              type="text"
              placeholder="Enter products"
              class="w-full p-2 border rounded-md"
            />

            <button
              type="submit"
              class="w-full bg-blue-500 text-white p-3 rounded-md mt-6 hover:bg-white hover:text-blue-500"
            >
              Register
            </button>

            <p class="mt-4 text-center">
              Already have an account?
              <router-link to="/" class="text-blue-500 hover:underline"
                >Login</router-link
              >
            </p>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>


 
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
  <button @click="tosignup">back</button>
  <h4>Admin Registration!!</h4>
  <span>Fill the form and submit</span>
  <div class="register-container">
    <div class="forms-box">
      <form @submit.prevent="registerAdmin">
        <div class="form-card">
          <h3>Personal Details</h3>

          <label for="role">Role</label><br />
          <select v-model="admin.role" required>
            <option disabled value="">Select Role</option>
            <option value="farmer">Farmer</option>
            <option value="admin">Admin</option></select
          ><br /><br />

          <label for="fName">First Name</label><br />
          <input
            v-model="admin.fName"
            type="text"
            placeholder="Enter your First name"
            required
          /><br /><br />

          <label for="lName">Last Name</label><br />
          <input
            v-model="admin.lName"
            type="text"
            placeholder="Enter your Last name"
          /><br /><br />

          <label for="mName">Middle Name</label><br />
          <input
            v-model="admin.mName"
            type="text"
            placeholder="**Optional"
          /><br /><br />

          <label for="nationalId">National Id No</label><br />
          <input
            v-model="admin.nationalId"
            type="text"
            placeholder="Enter your ID No"
          /><br /><br />

          <label for="gender">Gender</label><br />
          <select v-model="admin.gender" required>
            <option disabled value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option></select
          ><br /><br />

          <label for="email">Email</label><br />
          <input
            v-model="admin.email"
            type="email"
            placeholder="Enter your email"
            required
          /><br /><br />

          <label for="password">Password</label><br />
          <input
            v-model="admin.password"
            :type="showPassword ? 'text' : 'password'"
            placeholder="Enter your password"
            required
          /><br />
          <span class="show-password" @click="togglepassword">{{
            showPassword ? "🙈" : "👁️"
          }}</span>
        </div>

        <div class="form-card">
          <h3>Company Details</h3>

          <label for="selected">Category</label><br />
          <select v-model="admin.selected" required>
            <option disabled value="">Select Category</option>
            <option value="CEO">CEO</option>
            <option value="cto">CTO</option>
            <option value="tech staff">Tech Staff</option>
            <option value="staff">Staff</option></select
          ><br /><br />

          <label for="companyemail">Company Email</label><br />
          <input
            v-model="admin.companyemail"
            type="email"
            placeholder="Enter your company email"
          /><br />

          <label for="workId">Company ID</label><br />
          <input
            v-model="admin.workId"
            type="text"
            placeholder="Enter your Company ID"
          /><br />

          <button type="submit">Register Admin</button><br /><br />
          <span
            >do you have an account?<router-link to="/"
              >Login</router-link
            ></span
          >
        </div>
      </form>
    </div>
  </div>
</template>

<style scoped>
form {
  display: flex;
}
.register-container {
  display: flexbox;
  align-items: center;
  justify-content: center;
  background-color: white;
  height: 100vh;
}
.forms-box {
  display: flex;
  justify-content: center;
  padding: 20px;
  border: 1px solid black;
}
.form-card {
  padding: 20px;
  background-color: rgb(209, 202, 202);
  width: 300px;
  border-radius: 5px;
  border-right: 1px solid black;
}

label {
  display: block;

  font-size: 14px;
  text-align: left;
  color: rgb(86, 141, 189);
}

input {
  width: 250px;
  padding: 10px;

  border: none;
  border-radius: 4px;
  border: 1px solid rgb(133, 123, 123);
  margin: 3px 4px 4px 4px;
}
input:hover {
  background-color: antiquewhite;
}
h3 {
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
}
h4 {
  text-align: center;
  font-family: Arial, Helvetica, sans-serif;
}
select {
  padding: 4px;
}
.show-password {
  position: relative;
  right: -240px;
  top: -31px;
  cursor: pointer;
  color: #a87070;
  border-left: 1px solid black;
  padding: 4px;
}
</style>
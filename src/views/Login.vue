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
  <div class="login">
    <div class="login-container">
      <div class="login-box">
        <h2>Sign in</h2>
        <form @submit.prevent="login">
          <div class="input-group">
            <label>Email</label>
            <input type="email" v-model="email" required />
          </div>
          <div class="input-group">
            <label>Password</label>
            <input
              :type="showPassword ? 'text' : 'password'"
              v-model="password"
              required
            />
            <span class="show-password" @click="togglepassword">{{
              showPassword ? "🙈" : "👁️"
            }}</span>
          </div>
          <div class="input-group">
            <label>Role</label>
            <select v-model="role" required>
              <option disabled value="">Select Role</option>
            <option value="farmer">Farmer</option>
            <option value="admin">Admin</option>
            </select>
          </div>
          <button type="submit">Login</button>
          <p v-if="error" class="error">{{ error }}</p>
        </form>
        <span>Don't have an account?</span>
        <router-link to="/signupdashboard" class="item">Sign Up</router-link>
      </div>
    </div>
  </div>
</template>


 
  <style scoped>
form {
  border-bottom: 1px solid black;
}
.login {
  background-image: linear-gradient(
    to right,
    rgb(167, 167, 184),
    rgb(80, 80, 146)
  );
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  margin: 0;
}
.login-container {
  max-width: 400px;
  margin: auto;
  padding: 20px;
}
.login-box {
  background-color: rgb(226, 182, 182);
  padding: 30px;
  border-radius: 5px;
  text-align: center;
}
.input-group {
  margin: 15px 10px;
}
label {
  display: block;
  color: rgb(11, 11, 12);
  font-size: 14px;
  text-align: left;
}
input {
  width: 100%;
  padding: 10px;
  margin-top: 5px;
  border: none;
  border-radius: 4px;
}
option {
  padding: 10px;
  color: rgb(22, 98, 165);
}
select {
  padding: 5px;
  border: none;
  border-radius: 5px;
}
button {
  border: none;
  border-radius: 5px;
  color: rgb(56, 103, 145);
  padding: 7px;
}
h2 {
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
  font-weight: bolder;
  color: rgb(57, 113, 161);
}
.error {
  color: red;
}
.item {
  padding: 10px;
}
.show-password {
  position: relative;
  right: -90px;
  top: -29px;
  cursor: pointer;
  color: #a87070;
  border-left: 1px solid black;
  padding: 4px;
}
</style>
  
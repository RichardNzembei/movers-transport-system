<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";

const email = ref("");
const password = ref("");
const role = ref("farmer");
const error = ref("");
const router = useRouter();

// The login function
const login = () => {
  const storedFarmers = JSON.parse(localStorage.getItem("farmers")) || [];

  // Find a matching user in local storage
  const user = storedFarmers.find(
    (farmer) =>
      farmer.email === email.value &&
      farmer.password === password.value &&
      farmer.role === role.value
  );

  if (user) {
    // Redirect based on the role
    if (role.value === "admin") {
      router.push("/admindashboard");
    } else if (role.value === "farmer") {
      router.push("/farmerdashboard");
    }
  } else {
    error.value = "Invalid email, password, or role"; // Show error message
  }
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
            <input type="password" v-model="password" required />
          </div>
          <div class="input-group">
            <label>Role</label>
            <select v-model="role" required>
              <option value="admin">Admin</option>
              <option value="farmer">Farmer</option>
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
  form{
    border-bottom: 1px solid black;
  }
  .login{
    background-image: linear-gradient(to right,rgb(167, 167, 184),rgb(80, 80, 146));
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
.login-box{
  background-color: rgb(226, 182, 182);
  padding: 30px;
  border-radius: 5px;
  text-align: center;
}
.input-group{
  margin: 15px 10px;
}
label{
  display: block;
  color: rgb(11, 11, 12);
  font-size: 14px;
  text-align: left;
}
input{
  width: 100%;
  padding: 10px;
  margin-top: 5px;
  border: none;
  border-radius: 4px;
}
option{
  padding: 10px;
  color: rgb(22, 98, 165);
}
select{
  padding: 5px;
  border:none;
  border-radius:5px;
}
button{
  border:none;
  border-radius: 5px;
  color: rgb(56, 103, 145);
  padding: 7px;
}
h2{
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  font-weight: bolder;
  color: rgb(57, 113, 161);
}
.error {
  color: red;
}
.item{
  padding: 10px;
}
</style>
  
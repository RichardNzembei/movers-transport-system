<script setup>
import { useRouter } from "vue-router";
const router = useRouter();
</script>

<template>
  <div class="signUp-header">
    <h4>Welcome to movers transport system</h4>
    <p>
      Its a transport system excelling in helping farmers and retailers have a
      verbose exchange of goods
    </p>
    <span>Our main interest is to:</span>
    <li>provide a better communication between faemers and retailers</li>
    <li>provide a cost efficient exchange of goods</li>
    <li>provide a time savingplatform</li>
  </div>
  <div class="companyUsers">
    <span> the system has three types of users </span>
    <li>Admins</li>
    <li>Farmers</li>
    <li>Retailers</li>
  </div>
  <div class="signup-As">
    <span
      >Sign Up as <router-link to="/adminregistration">Admin</router-link></span
    ><br />
    <span>Sign Up as <router-link to="/farmerreg">Farmer</router-link></span>
  </div>
  <span>do you have an account?<router-link to="/">Login</router-link></span>
</template>
<style scoped>
.signUp-header {
  position: relative;
  margin: 20px;
}
h4 {
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  font-weight: bolder;
  color: rgb(83, 137, 184);
  font-size: 26px;
}
li {
  color: rgb(103, 126, 126);
  padding: 5px;
}
p {
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
}
.signup-As {
  padding: 10px;
  border-radius: 5px;
  border: 1px solid whitesmoke;
}
</style>
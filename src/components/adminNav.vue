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
const toadminprofile=()=>{
    router.push('/adminprofile')
}
</script>

<template>
      <nav class="navbar">
    <div class="nav-left">
      <img
        src="../assets/icons/menu.png"
        alt="menu icon"
        @click="store.toggleDropdown"
        class="nav-icon"
      />
     
        <img
         @click="toadminprofile"
        src="../assets/icons/admin-icon.png"
        alt="profile-icon"
        class="profile-icon"
      />
      <span class="profile-name"  @click="toadminprofile">{{ currentAdmin.fName }}</span>
      
   
    </div>
    <div class="nav-right" @click="logout">
      <img
        src="../assets/icons/logout.png"
        alt="logout icon"
        class="logout-icon"
      />
      <span class="nav-item">logout</span>
    </div>

    <div class="sidebar" v-if="store.isDropdownVisible">
      <div class="sidebar-header">
        <span>contents</span>
        <button @click="store.toggleDropdown" class="close-btn">X</button>
      </div>
      <div class="sidebar-list">
        <img
          src="../assets/icons/home.png"
          alt="employees icon"
          class="icon"
        />
        <router-link to="/admindashboard" class="sidebar-item"
          >Home</router-link
        >
      </div>
      <div class="sidebar-list">
        <img
          src="../assets/icons/members.png"
          alt="employees icon"
          class="icon"
        />
        <router-link to="/employeedashboard" class="sidebar-item"
          >Employees</router-link
        >
      </div>
      <div class="sidebar-list">
        <img
          src="../assets/icons/members.png"
          alt="employees icon"
          class="icon"
        />
        <router-link to="/farmers" class="sidebar-item"
          >Farmers</router-link
        >
      </div>
      <div class="sidebar-list">
        <img
          src="../assets/icons/orders.png"
          alt="transport order icon"
          class="icon"
        />
        <router-link to="/transportdashboard" class="sidebar-item"
          >Transport Orders</router-link
        >
      </div>
      <div class="sidebar-list">
        <img
          src="../assets/icons/revenue.png"
          alt="revenue icon"
          class="icon"
        />
        <router-link to="/revenuedashboard" class="sidebar-item"
          >Revenue & Profits</router-link
        >
      </div>
    </div>
  </nav>
</template>
<style scoped>
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #dce1e7;
  padding: 16px;
}
.nav-left {
  display: flex;
  align-items: center;
}
.nav-icon {
  cursor: pointer;
  margin-right: 12px;
  width: 28px;
  height: 28px;
}
.profile-icon {
  cursor: pointer;
  margin-right: 12px;
  width: 28px;
  height: 28px;
  border-radius: 20px;
  border: 1px solid white;
}
.logout-icon {
  cursor: pointer;
  margin-right: 8px;
  width: 28px;
  height: 28px;
  border-radius: 20px;
  border: 1px solid white;
}
.icon {
  cursor: pointer;
  margin-right: 8px;
  width: 24px;
  height: 24px;
  border-radius: 20px;
  border: 1px solid white;
}
.profile-name {
  font-size: 24px;
  color: black;
  margin-right: 16px;
}
.nav-item {
  cursor: pointer;
  margin-right: 12px;
  color: black;
  font-size: 24px;
}

.nav-right {
  display: flex;
  align-items: center;
}
.sidebar {
  position: fixed;
  top: 0;
  left: 0;
  width: 250px;
  height: 500px;
  background-color: rgb(216, 225, 228);
  box-shadow: 2px 0px 12px rgba(211, 203, 203, 0.2);
  padding: 20px;
  transition: left 0.7s ease, opacity o.5s ease;
  z-index: 1000;
  padding: 24px;
}

.sidebar-item {
  display: block;
  padding: 6px 15px;
  text-decoration: none;
  color: #000;
}
.sidebar-list {
  display: flex;
  padding: 20px;
}
.sidebar-header {
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding-bottom: 16px;
  border-bottom: 1px solid black;
}

.close-btn {
  background-color: transparent;
  border: none;
  font-size: 18px;
  cursor: pointer;
}
.sidebar-item:hover {
  color: blue;
}
</style>
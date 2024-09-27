<script setup>
import { ref } from "vue";

const isSidebarVisible = ref(false);
const toggleSidebar = () => {
  isSidebarVisible.value = !isSidebarVisible.value;
};
</script>

<template>
  <header class="navbar">
    <div class="navbar-item" @click="toggleSidebar">
      <span>menu</span>
    </div>

    <nav
      class="sidebar-menu"
      :class="{ visible: isSidebarVisible }"
      aria-expanded="isSidebarVisible"
    >
      <div class="sidebar-head">
        <span class="sidebar-contents">contents</span>
        <button @click="toggleSidebar">X</button>
      </div>
      <router-link to="/" class="sidebar-item">Home</router-link>
      <router-link to="/members" class="sidebar-item">Members</router-link>
      <router-link to="/vehicles" class="sidebar-item">Vehicles</router-link>
      <router-link to="/drivers" class="sidebar-item">Drivers</router-link>
      <router-link to="/loaders" class="sidebar-item">Loaders</router-link>
      <router-link to="/orders" class="sidebar-item">Orders</router-link>
      <router-link to="/goods" class="sidebar-item">Goods</router-link>
    </nav>
  </header>
</template>
  
  <style scoped>
.navbar {
  background-color: rgb(237, 245, 245);
  padding: 10px;
  border-bottom: 1px solid black;
}

.navbar-item {
  display: flex;
  justify-content: space-between;
  margin: 5px;
  cursor: pointer;
}
.sidebar-menu {
  position: fixed;
  top: 0;
  left: -300px;
  height: 100%;
  width: 250px;
  background-color: rgb(238, 233, 233);
  box-shadow: 2px 0 16px rgba(0, 0, 0, 0.1);
  transition: left 0.3s ease;
  padding: 20px;
  z-index: 1000;
}

.sidebar-menu.visible {
  left: 0;
}

.sidebar-item {
  display: block;
  padding: 15px;
  color: #5b8eaf;
  text-decoration: none;
  margin-bottom: 10px;
}

.sidebar-item:hover {
  background-color: aliceblue;
  color: blue;
}
button {
  position: relative;
  left: 130px;
  text-decoration: none;
  color: #fff;
  background: linear-gradient(315deg, #42d392 25%, #647eff);
  margin: 3px;
  border-radius: 5px;
}
.sidebar-contents {
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  font-size: 20px;
  color: rgb(78, 78, 216);
}
.sidebar-head {
  border-bottom: 1px solid blue;
}
</style>
  
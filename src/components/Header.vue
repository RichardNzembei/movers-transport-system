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
      <span aria-label="Toggle sidebar menu"><img src="../assets/icons/menu.png" alt="" class="menuicon"></span>
    </div>
    <div v-if="isSidebarVisible" class="sidebar-overlay" @click="toggleSidebar"></div>

    <nav
      class="sidebar-menu"
      :class="{ visible: isSidebarVisible }"
      aria-expanded="isSidebarVisible"
    >
      <div class="sidebar-head">
        <span class="sidebar-contents">contents</span>
        <button @click="toggleSidebar">X</button>
      </div>
      <router-link to="/" class="sidebar-item"><img src="../assets/icons/home.png" alt="" class="icon"> Home</router-link>
      <router-link to="/members" class="sidebar-item"><img src="../assets/icons/members.png" alt="" class="icon"> Members</router-link>
      <router-link to="/vehicles" class="sidebar-item"><img src="../assets/icons/vehicles.png" alt="" class="icon"> Vehicles</router-link>
      <router-link to="/drivers" class="sidebar-item"><img src="../assets/icons/driver.png" alt="" class="icon"> Drivers</router-link>
      <router-link to="/loaders" class="sidebar-item"><img src="../assets/icons/drivers.png" alt="" class="icon"> Loaders</router-link>
      <router-link to="/orders" class="sidebar-item"><img src="../assets/icons/orders.png" alt="" class="icon"> Orders</router-link>
      <router-link to="/goods" class="sidebar-item"><img src="../assets/icons/goods.png" alt="" class="icon"> Goods</router-link>
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
 
  display: inline-block;
  
  text-decoration: none;
  color: #0a0101;

  margin: -7px;
  border-radius: 5px;
  padding: 5px;
  border: none;
}
button:hover{
  background-color: aqua;
}
.sidebar-contents {
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  font-size: 20px;
  color: rgb(78, 78, 216);
}
.sidebar-head {
  
  display: flex;
  justify-content: space-between; 
  border-bottom: 1px solid blue;
  padding: 10px;
}
.sidebar-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 900;
}
.icon{
  width:18px;
  height: 18px;
}
.menuicon{
  height: 24px;
  width: 24px;
}
@media (max-width: 600px) {
  .sidebar-menu {
    width: 200px;
  }
  button {
    padding: px;
  }
}

</style>
  
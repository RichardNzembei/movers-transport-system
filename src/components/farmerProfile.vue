<script setup>
import{ref} from 'vue'
import FarmerNav from './FarmerNav.vue';
const storedFarmers= JSON.parse(localStorage.getItem("farmers")) || [];
const loggedInEmail = localStorage.getItem("loggedInUserEmail");
const currentFarmer=ref(null)
if (loggedInEmail) {
  currentFarmer.value = storedFarmers.find(
    (farmer) => farmer.email === loggedInEmail
  );
}
</script>
<template>
  <FarmerNav/>
    <div class="section basic-info">
      <div class="category">
        <h3>Farmer Information</h3>
      </div>
  
      <div class="info-content" >
        <div class="profile-pic">
          <img src="../assets/icons/profile-icon.png" alt="Profile Picture" />
        </div>
        <div class="info-details">
     
          <p>
            <strong class="info-label">Name </strong>
  
            <span class="info-data">{{ currentFarmer.fName  +''+currentFarmer.lName }}</span>
          </p>
          <p>
            <strong class="info-label">ID No </strong>
            <span class="info-data">{{ currentFarmer.NationalId }}</span>
          </p>
          <p>
            <strong class="info-label">Gender </strong>
            <span class="info-data">{{ currentFarmer.Selected }}</span>
          </p>
          <p>
            <strong class="info-label">Email </strong>
            <span class="info-data">{{ currentFarmer.email }}</span>
          </p>
        </div>
        <div class="info-details">
          <p>
            <strong class="info-label">County</strong>
            <span class="info-data">{{ currentFarmer.county }}</span>
          </p>
          
          <p>
            <strong class="info-label"> Farm Type</strong>
            <span class="info-data">{{ currentFarmer.type }}</span>
          </p>
          <p>
            <strong class="info-label">Produce</strong>
            <span class="info-data">{{ currentFarmer.produce }}</span>
          </p>
          <p>
            <strong class="info-label">Total Orders</strong>
            <span class="info-data"></span>
          </p>
        </div>
      </div>
    </div>
  </template>
  <style scoped>
  .section {
    background-color: hsl(40, 10%, 94%);
    padding: 20px;
    margin-bottom: 20px;
    border-radius: 1px;
  }
  .section.basic-info {
    padding: 20px;
  
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    margin-top: 20px;
  }
  .info-content {
    display: flex;
    justify-content: space-between;
  }
  .info-data {
    color: rgb(141, 110, 71);
  }
  .info-details {
    flex: 1;
    padding: 30px;
    border-bottom: 1px solid black;
  }
  .info-label {
    display: inline-block;
    margin-right: 50px;
    font-family: "Courier New", Courier, monospace;
    font-weight: bold;
    font-size: 20px;
  }
  .category {
    background-color: rgb(139, 137, 12);
    margin: 0;
    top: 0;
    position: relative;
  }
  .btn-red {
    background-color: #ff4d4d;
    color: white;
    padding: 10px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    margin-top: 10px;
  }
  
  .btn-green {
    background-color: #4caf50;
    color: white;
    padding: 10px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    margin-top: 10px;
  }
  .profile-pic img {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    margin-top: 40px;
    border-bottom: 1px solid black;
  }
  .profile-pic{
    border-right: 1px solid black;
    padding: 20px;
  }
  h3 {
    margin: 0;
    padding: 10px;
  }
  </style>
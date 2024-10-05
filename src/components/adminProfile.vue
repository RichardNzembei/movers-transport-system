<script setup>
import{ref} from 'vue'
import adminNav from './adminNav.vue';
const storedAdmins = JSON.parse(localStorage.getItem("admins")) || [];
const loggedInEmail = localStorage.getItem("loggedInUserEmail");
const currentAdmin=ref(null)
if (loggedInEmail) {
  currentAdmin.value = storedAdmins.find(
    (admin) => admin.email === loggedInEmail
  );
}
</script>
<template>
    <adminNav/>
    <div class="section basic-info">
      <div class="category">
        <h3>Admin Information</h3>
      </div>
  
      <div class="info-content" >
        <div class="profile-pic">
          <img src="../assets/icons/profile-icon.png" alt="Profile Picture" />
        </div>
        <div class="info-details">
          <p>
            <strong class="info-label">Category</strong>
            <span class="info-data">{{currentAdmin.selected.toUpperCase()}}</span>
          </p>
          <p>
            <strong class="info-label">Name </strong>
  
            <span class="info-data">{{ currentAdmin.fName.toUpperCase()+' '+currentAdmin.lName.toUpperCase() }}</span>
          </p>
          <p>
            <strong class="info-label">ID No </strong>
            <span class="info-data">{{ currentAdmin.nationalId }}</span>
          </p>
          <p>
            <strong class="info-label">Gender </strong>
            <span class="info-data">{{ currentAdmin.gender.toUpperCase() }}</span>
          </p>
        
        </div>
        <div class="info-details">
          <p>
            <strong class="info-label">Company ID</strong>
            <span class="info-data">{{ currentAdmin.workId.toUpperCase()}}</span>
          </p>
          <p>
            <strong class="info-label"> Company Email </strong>
            <span class="info-data">{{ currentAdmin.companyemail }}</span>
          </p>
          <p>
            <strong class="info-label"> Personal Email</strong>
            <span class="info-data">{{ currentAdmin.email }}</span>
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
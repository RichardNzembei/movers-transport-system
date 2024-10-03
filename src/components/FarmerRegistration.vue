<script setup>
import { ref } from 'vue';
import router from '../router'; // Keep the router for navigation

// Define farmer data
const farmer = ref({
  fName: '',
  lName: '',
  mName: '',
  NationalId: '',
  Selected: '',
  email: '',
  password: '',
  country: '',
  county: '',
  subcounty: '',
  province: '',
  address: '',
  type: '',
  produce: '',
  role: '' // Include role in the farmer object
});

// Function to register farmer and store in local storage
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
    // Get existing farmers from local storage or initialize as empty array
    let existingFarmers = JSON.parse(localStorage.getItem('farmers')) || [];

    // Add the new farmer to the existing farmers
    existingFarmers.push({ ...farmer.value });

    // Save back to local storage
    localStorage.setItem('farmers', JSON.stringify(existingFarmers));

    // Clear the form fields after successful registration
    Object.assign(farmer.value, {
      fName: '',
      lName: '',
      mName: '',
      NationalId: '',
      Selected: '',
      email: '',
      password: '',
      country: '',
      county: '',
      subcounty: '',
      province: '',
      address: '',
      type: '',
      produce: '',
      role: ''
    });

    alert("Farmer registered successfully!");
    router.push('/'); // Redirect after successful registration
  } else {
    alert("Please fill all required fields.");
  }
};
</script>


<template>
  <div>
    <h4>Farmer Registration!!</h4>
    <span>Fill the form and submit</span>
    <div class="register-container">
      <div class="forms-box">
        <form @submit.prevent="registerFarmer">
        <div class="form-card">
          <h3>Personal Details</h3>
        
            <label for="role">Role</label><br />
            <select v-model="farmer.role" required>
              <option disabled value="">Select Role</option>
              <option value="farmer">Farmer</option>
              <option value="admin">Admin</option>
            </select><br /><br />

            <label for="fName">First Name</label><br>
            <input v-model="farmer.fName" type="text" placeholder="Enter your First name" required><br><br>

            <label for="lName">Last Name</label><br>
            <input v-model="farmer.lName" type="text" placeholder="Enter your Last name" required><br><br>

            <label for="mName">Middle Name</label><br>
            <input v-model="farmer.mName" type="text" placeholder="**Optional"><br><br>

            <label for="NationalId">National Id No</label><br>
            <input v-model="farmer.NationalId" type="text" placeholder="Enter your ID No" required><br><br>

            <label for="Gender">Gender</label><br>
            <select v-model="farmer.Selected" required>
              <option disabled value="">Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select><br><br>

            <label for="email">Email</label><br>
            <input v-model="farmer.email" type="email" placeholder="Enter your email" required><br><br>

            <label for="Password">Password</label><br>
            <input v-model="farmer.password" type="password" placeholder="Enter your password" required><br>
          
        </div>

        <!-- Location Details Form -->
        <div class="form-card">
          <h3>Location Details</h3>
          
            <label for="Country">Country</label><br>
            <input v-model="farmer.country" type="text" placeholder="Enter your Country's Name" required><br><br>

            <label for="County">County</label><br>
            <input v-model="farmer.county" type="text" placeholder="Enter your County's name" required><br><br>

            <label for="Sub-county">Sub-County</label><br>
            <input v-model="farmer.subcounty" type="text" placeholder="Enter your Sub-county"><br><br>

            <label for="province">Province</label><br>
            <input v-model="farmer.province" type="text" placeholder="Enter your Province"><br><br>

            <label for="address">Address</label><br>
            <input v-model="farmer.address" type="text" placeholder="Enter your address"><br><br>
          
        </div>

        <!-- Farmer Details Form -->
        <div class="form-card">
          <h3>Farmer Details</h3>
          
            <label for="farmType">Farm Type</label><br>
            <select v-model="farmer.type" required>
              <option disabled value="">Select Farm Type</option>
              <option value="commercial">Commercial</option>
              <option value="domestic">Domestic</option>
              <option value="plantation">Plantation</option>
              <option value="indigenous">Indigenous</option>
            </select><br><br>

            <label for="produce">Produce</label><br>
            <input v-model="farmer.produce" type="text" placeholder="Enter products"><br><br>

            <button type="submit">Register</button>
        
        </div>
      </form>
      </div>
  
    </div>
  </div>
</template>


 <style scoped>
 form{
  display: flex;
 }
.register-container{
    display: flexbox;
    align-items: center;
    justify-content: center;
    background-color:white;
    height: 100vh;
}
.forms-box{
    display: flex;
    justify-content: center;
    padding: 20px;
    border: 1px solid black;
    
}
.form-card{
    padding: 20px;
    background-color: rgb(209, 202, 202);
    width: 300px;
    border-radius: 5px;
    border-right: 1px solid black;
}

    label{
  display: block;
  
  font-size: 14px;
  text-align: left;
  color: rgb(86, 141, 189);
}

    input{
  width: 250px;
  padding: 10px ;

  border: none;
  border-radius: 4px;
  border: 1px solid rgb(133, 123, 123);
  margin: 3px 4px 4px 4px;
}
input:hover{
    background-color: antiquewhite;
}
h3{
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
}
h4{
    text-align: center;
    font-family: Arial, Helvetica, sans-serif;

}
select{
    padding: 4px;
}
</style> 

  
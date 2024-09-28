<script setup>

</script>

<template>
  <div class="dashboard">
    <h4>Welcome to the Movers Transport System.</h4>
    <div class="cards">
      <div class="card">
        <img src="../assets/icons/members.png" alt="Members Icon" class="card-icon" />
        <h1>Members</h1>
        <p class="description">Total registered members in the system.</p>
        <p class="count">{{ membersCount }}</p>
      </div>
      <div class="card">
        <img src="../assets/icons/vehicles.png" alt="Vehicles Icon" class="card-icon" />
        <h1>Vehicles</h1>
        <p class="description">Total number of vehicles available.</p>
        <p class="count">{{ vehiclesCount }}</p>
      </div>
      <div class="card">
        <img src="../assets/icons/orders.png" alt="Orders Icon" class="card-icon" />
        <h1>Orders</h1>
        <p class="description">Total orders completed this month.</p>
        <p class="count">{{ ordersCount }}</p>
      </div>
      <div class="card">
        <img src="../assets/icons/revenue.png" alt="Revenue Icon" class="card-icon" />
        <h1>Revenue</h1>
        <p class="description">Total revenue generated.</p>
        <p class="count">{{ revenue }}</p>
      </div>
      <div class="card">
        <img src="../assets/icons/expenses.png" alt="Expenses Icon" class="card-icon" />
        <h1>Expenses</h1>
        <p class="description">Total expenses incurred.</p>
        <p class="count">{{ expenses }}</p>
      </div>
    </div>
  </div>
</template>


  

  
  <style scoped>
  .dashboard {
  background-image: url('../assets/img/movers.jpg'); /* Update the path to your image */
  background-size: cover; /* Cover the entire area */
  background-position: center; /* Center the image */
  padding: 20px; /* Add some padding */
  color: white; /* Change text color if needed for contrast */
}
h4{
  font-family:Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
  font-weight: bolder;
  text-align: center;
 color: rgb(22, 36, 170);
}
p {
  color: rgb(201, 144, 59);
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  font-weight: bolder;
  text-align: center;
  margin-bottom: 30px; 
}

.cards {
  display: flex;
  flex-wrap: wrap; 
  justify-content: space-evenly;
  gap: 20px;
}

.card {
  background-color: white;
  width: 250px; 
  height: 300px; 
  border-radius: 5px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); 
  
  align-items: center;
  justify-content: center;
  padding: 10px;
  text-align: center;
  transition: transform 0.3s ease;
}

.card:hover {
  transform: translateY(-5px); 
}

h1 {
  color: rgb(20, 17, 17);
  text-decoration: underline;
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande", "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
  font-size: 20px;
  font-style: italic;
  font-weight: bold;
  margin: 0;
  
}


@media (max-width: 768px) {
  .card {
    width: 100%; 
    height: auto;
    margin-bottom: 20px;
  }

  .cards {
    flex-direction: column; 
  }
}
</style>



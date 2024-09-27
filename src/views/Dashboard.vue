<script>
export default {
  name: "Dashboard",
};
</script>
<template>
  <div class="dashboard">
    <p>Welcome to the Movers Transport System.</p>
    <div class="cards">
      <div class="members">
        <h1>members</h1>
      </div>
      <div class="members">
        <h1>Vehicles</h1>
      </div>
      <div class="members">
        <h1>Orders</h1>
      </div>
      <div class="members">
        <h1>Revenue</h1>
      </div>
      <div class="members">
        <h1>Expenses</h1>
      </div>
    </div>
  </div>
</template>
  

  
  <style scoped>
p {
  color: rgb(201, 144, 59);
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  font-weight: bolder;
  text-align: center;
}
.members {
  background-color: white;

  width: 300px;

  height: 400px;
  border-radius: 5px;
}
.cards {
  display: flex;
  justify-content: space-evenly;
}
h1 {
  color: rgb(20, 17, 17);
  text-align: center;
  text-decoration: underline;
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
  font-size: 20px;
  font-style: italic;
  font-weight: bold;
}
</style>

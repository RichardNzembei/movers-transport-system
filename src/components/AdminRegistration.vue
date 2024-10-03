<script setup>

</script>
<template>
   <h4>User Rgistration!!</h4>
       <span>fill the form and submit</span>
    <div class="register-container">
     
<div class="forms-box">
<div class="form-card">
    <h3>Personal Details</h3>
<form>
    <label for="fName">First Name</label><br>
    <input type="text" placeholder="Enter your First name" ><br><br>
    <label for="lName">Last Name</label><br>
    <input type="text" placeholder="Enter your Last name"><br><br>
    <label for="mName">Middle Name</label><br>
    <input type="text" placeholder="**Optional"><br><br>
    <label for="National Id">National Id No</label><br>
    <input type="text" placeholder="enter your ID No"><br><br>
    <label for="Gennder">Gender</label>
    <select >
        <option value="male">Male</option>
        <option value="female">Female</option>
    </select><br><br>
    <label for="email">Email</label><br>
    <input type="text" placeholder="enter your Gmail"><br><br>
    <label for="password">Password</label><br>
    <input type="text" placeholder="enter your password"><br>
</form>
</div>
<div class="form-card">
    <h3>Location details</h3>
<form>
    <label for="Country">Country</label><br>
    <input type="text" placeholder="Enter your Country`s Name" ><br><br>
    <label for="County">county</label><br>
    <input type="text" placeholder="Enter your County`s name"><br><br>
    <label for="Sub-county">Sub-County</label><br>
    <input type="text" placeholder="Enter your sub-conty"><br><br>
    <label for="province">Province</label><br>
    <input type="text" placeholder="Enter your province"><br><br>
    <label for="address">Address</label>
    <input type="text" placeholder="Enter your address"><br><br>

 
</form>
</div>
<div class="form-card">
    <h3>Farmer details</h3>
<form>
    <label for="farmer type">Farm Type</label>
 <select name="" id="">
    <option value="commercial">Commercial</option>
    <option value="domestic">Domestic</option>
    <option value="Plantation">Plantation</option>
    <option value="Indigeneos">Indigeneous</option>

 </select><br><br>
 <label for="produce">Produce</label>
 <input type="text" name="produce" id="name" placeholder="enter products">
 
</form>
</div>
</div>
    </div>
</template>
<style scoped>
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
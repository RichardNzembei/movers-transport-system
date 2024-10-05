<script setup>
import { ref, reactive, onMounted, computed } from "vue";

const isEditing = ref(false);
const newEmployee = reactive({
  category: "",
  fName: "",
  lName: "",
  workId: "",
  companyemail: "",
  email: "",
});
const employees = ref([]);
const currentIndex = ref(-1);
onMounted(() => {
  loadEmployees();
});
const loadEmployees = () => {
  const storeEmployees = localStorage.getItem("employees");
  employees.value = storeEmployees ? JSON.parse(storeEmployees) : [];
};
const saveEmployees = () => {
  localStorage.setItem("employees", JSON.stringify(employees.value));
};
const createEmployee = () => {
  if (newEmployee.fName && newEmployee.lName && newEmployee.workId) {
    employees.value.push({ ...newEmployee });
    saveEmployees();
    resetForm();
  }
};
const editEmployee=(employee,index)=>{
    isEditing.value=true
    currentIndex.value=index
    Object.assign(newEmployee,employee)
}
const updateEmployee=()=>{
    if (newEmployee.fName && newEmployee.lName && newEmployee.workId){
    employees.value[currentIndex.value]={...newEmployee}
    saveEmployees()
    isEditing.value=false
    currentIndex.value=-1
    resetForm()
    }
}
const cancelEdit=()=>{
    resetForm()
}
const deleteEmployee=(index)=>{
employees.value.splice(index,1)
saveEmployees()
}
const resetForm = () => {
  newEmployee.category = "";
  newEmployee.fName = "";
  newEmployee.lName = "";
  newEmployee.workId = "";
  newEmployee.companyemail = "";
  newEmployee.email = "";
  isEditing.value = false;
  currentIndex.value = -1;
};
const drivers=computed(()=>employees.value.filter(emp=>emp.category==='driver'))
const loaders=computed(()=>employees.value.filter(emp=>emp.category==='loader'))
</script>
<template>
  <div class="employee-reg">
    <div class="form-card">
      <h2>{{ isEditing ? "Edit" : "Add" }} Employee</h2>
      <form>
        <div class="form">
          <div class="section">
            <label for="categoty">Category</label><br />
            <select v-model="newEmployee.category">
              <option disabled value="">Select Category</option>
              <option value="driver">Driver</option>
              <option value="loader">Loader</option></select
            ><br />
            <label for="fName">First Name</label><br />
            <input
              type="text"
              placeholder="enter first name"
              v-model="newEmployee.fName"
            /><br />
            <label for="lName">Last Name</label><br />
            <input
              type="text"
              placeholder="enter last name"
              v-model="newEmployee.lName"
            />
          </div>
          <div class="section">
            <label for="workId">Work ID</label><br />
            <input
              type="text"
              placeholder="enter work ID"
              v-model="newEmployee.workId"
            /><br />
            <label for="companyemail">Company Email</label><br />
            <input
              type="text"
              placeholder="enter company email"
              v-model="newEmployee.companyemail"
            /><br />
            <label for="email">Email</label><br />
            <input
              type="text"
              placeholder="enter email"
              v-model="newEmployee.email"
            />
          </div>
        </div>
        <div class="buttons">
          <button @click="isEditing ? updateEmployee() : createEmployee()">
            {{ isEditing ? "update" : "create" }}
          </button>
          <button v-if="isEditing" @click="cancelEdit()">cancel</button>
        </div>
      </form>
    </div>
  </div>
<div class="employees-list">
    <div v-if="drivers.length>0" class="list">
    <h2>drivers List</h2>
    <table>
        <tr>
            <th>Name</th>
            <th>Work ID</th>
            <th>Company Email</th>
            <th>Actions</th>
        </tr>
        <tr v-for="(employee,index) in drivers" :key="index">
            <td>{{ employee.fName+''+employee.lName }}</td>
            <td>{{ employee.workId }}</td>
            <td>{{ employee.companyemail }}</td>
            <td>
                <button @click="editEmployee(employee, index)">Edit</button>
                <button @click="deleteEmployee(index)">Delete</button>
            </td>
        </tr>
    </table>

  </div>
  <div v-else class="list">
<p>No drivers at the moment!!</p>
  </div>
  <div v-if="loaders.length" class="list">
    <h2>loaders List</h2>
    <table>
        <tr>
            <th>Name</th>
            <th>Work ID</th>
            <th>Company Email</th>
            <th>Actions</th>
        </tr>
        <tr v-for="(employee,index) in loaders" :key="index">
            <td>{{ employee.fName+''+employee.lName }}</td>
            <td>{{ employee.workId }}</td>
            <td>{{ employee.companyemail }}</td>
            <td>
                <button @click="editEmployee(employee, index)">Edit</button>
                <button @click="deleteEmployee(index)">Delete</button>
            </td>
        </tr>
    </table>
  </div>
  <div v-else class="list">
<p>No loaders at the moment!!</p>
  </div>
</div>
</template>
<style scoped>
.form {
  display: flex;
  padding: 10px;
  align-items: center;
  justify-content: flex-start;
}
form {
  border: 1px solid rgb(230, 227, 227);
}
.section {
  margin: 10px;
  padding: 10px;
  justify-content: center;
  align-content: center;
  align-items: center;
  width: 100%;
}
label {
  color: rgb(12, 115, 204);
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
    "Lucida Sans", Arial, sans-serif;
}
input {
  padding: 5px;
  width: 100%;
}
.buttons {
  display: flex;
  justify-content: center;
}
.employees-list{
    display: flex;

}
.list{
    width: 100%;
    border-right: 1px solid rgb(190, 180, 180);
}
table,th,td{
    border: 1px solid black;
    border-collapse: collapse;
}
p{
    color: rgb(32, 123, 202);
    font-family: Arial, Helvetica, sans-serif;
    font-weight: bold;
    font-size: 24px;
}
</style>
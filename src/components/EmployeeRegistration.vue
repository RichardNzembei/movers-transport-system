<script setup>
import { ref, reactive, onMounted, computed } from "vue";
const isActionsVisible=ref(false)

const isEditing = ref(false);
const actionDriverIndex = ref(null)
const actionLoaderIndex = ref(null)
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
const toggleActions=()=>{
    isActionsVisible.value=!isActionsVisible.value
}
const toggleDriverAction = (index) => {
  if (actionDriverIndex.value === index) {
    actionDriverIndex.value = null; 
  } else {
    actionDriverIndex.value = index; 
  }
};
const toggleLoaderAction = (index) => {
  if (actionLoaderIndex.value === index) {
    actionLoaderIndex.value = null; 
  } else {
    actionLoaderIndex.value = index; 
  }
};
</script>
<template>
  <div class="employee-reg">
    <div class="form-card bg-white shadow-md rounded-lg p-5 mb-5">
      <h2 class="text-2xl font-semibold">{{ isEditing ? "Edit" : "Add" }} Employee</h2>
      <form>
        <div class="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
          <div class="flex-1">
            <label for="category" class="block text-gray-700">Category</label>
            <select v-model="newEmployee.category" class="mt-1 block w-full p-2 border border-gray-300 rounded">
              <option disabled value="">Select Category</option>
              <option value="driver">Driver</option>
              <option value="loader">Loader</option>
            </select>
          </div>
          <div class="flex-1">
            <label for="fName" class="block text-gray-700">First Name</label>
            <input
              type="text"
              placeholder="Enter first name"
              v-model="newEmployee.fName"
              class="mt-1 block w-full p-2 border border-gray-300 rounded"
            />
          </div>
          <div class="flex-1">
            <label for="lName" class="block text-gray-700">Last Name</label>
            <input
              type="text"
              placeholder="Enter last name"
              v-model="newEmployee.lName"
              class="mt-1 block w-full p-2 border border-gray-300 rounded"
            />
          </div>
        </div>

        <div class="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 mt-4">
          <div class="flex-1">
            <label for="workId" class="block text-gray-700">Work ID</label>
            <input
              type="text"
              placeholder="Enter work ID"
              v-model="newEmployee.workId"
              class="mt-1 block w-full p-2 border border-gray-300 rounded"
            />
          </div>
          <div class="flex-1">
            <label for="companyemail" class="block text-gray-700">Company Email</label>
            <input
              type="text"
              placeholder="Enter company email"
              v-model="newEmployee.companyemail"
              class="mt-1 block w-full p-2 border border-gray-300 rounded"
            />
          </div>
          <div class="flex-1">
            <label for="email" class="block text-gray-700">Email</label>
            <input
              type="text"
              placeholder="Enter email"
              v-model="newEmployee.email"
              class="mt-1 block w-full p-2 border border-gray-300 rounded"
            />
          </div>
        </div>

        <div class="flex justify-center mt-4 space-x-4">
          <button
            type="button"
            @click="isEditing ? updateEmployee() : createEmployee()"
            class="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-600"
          >
            {{ isEditing ? "Update" : "Create" }}
          </button>
          <button
            v-if="isEditing"
            type="button"
            @click="cancelEdit()"
            class="bg-red-500 text-white font-bold py-2 px-4 rounded hover:bg-red-600"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>

    <div class="employees-list flex flex-col space-y-5">
      <div v-if="drivers.length > 0" class="list bg-white shadow-md rounded-lg p-5">
        <h2 class="text-2xl font-semibold">Drivers List</h2>
        <table class="min-w-full border-collapse border border-gray-300 mt-3">
          <thead>
            <tr>
              <th class="border border-gray-300 p-2">Name</th>
              <th class="border border-gray-300 p-2">Work ID</th>
              <th class="border border-gray-300 p-2">Company Email</th>
              <th class="border border-gray-300 p-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(employee, index) in drivers" :key="index">
              <td class="border border-gray-300 p-2">{{ employee.fName + ' ' + employee.lName }}</td>
              <td class="border border-gray-300 p-2">{{ employee.workId }}</td>
              <td class="border border-gray-300 p-2">{{ employee.companyemail }}</td>
              <td class="border border-gray-300 p-2">
                <span>
                  <img
                    src="../assets/icons/actions.png"
                    alt="actions icon"
                    @click="toggleDriverAction(index)"
                    class="actions-icon cursor-pointer"
                  />
                </span>
                <div v-if="actionDriverIndex === index" class="actions-dropdown absolute bg-white border border-gray-300 p-3 rounded shadow-md">
                  <button @click="editEmployee(employee, index)" class="block text-blue-500">Edit</button>
                  <button @click="deleteEmployee(index)" class="block text-red-500">Delete</button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div v-else class="list">
        <p class="text-red-500">No drivers at the moment!!</p>
      </div>

      <div v-if="loaders.length > 0" class="list bg-white shadow-md rounded-lg p-5">
        <h2 class="text-2xl font-semibold">Loaders List</h2>
        <table class="min-w-full border-collapse border border-gray-300 mt-3">
          <thead>
            <tr>
              <th class="border border-gray-300 p-2">Name</th>
              <th class="border border-gray-300 p-2">Work ID</th>
              <th class="border border-gray-300 p-2">Company Email</th>
              <th class="border border-gray-300 p-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(employee, index) in loaders" :key="index">
              <td class="border border-gray-300 p-2">{{ employee.fName + ' ' + employee.lName }}</td>
              <td class="border border-gray-300 p-2">{{ employee.workId }}</td>
              <td class="border border-gray-300 p-2">{{ employee.companyemail }}</td>
              <td class="border border-gray-300 p-2">
                <span>
                  <img 
                    src="../assets/icons/actions.png" 
                    alt="actions icon"
                    @click="toggleLoaderAction(index)" 
                    class="actions-icon cursor-pointer"
                  />
                </span>
                <div v-if="actionLoaderIndex === index" class="actions-dropdown absolute bg-white border border-gray-300 p-3 rounded shadow-md">
                  <button @click="editEmployee(employee, index)" class="block text-blue-500">Edit</button>
                  <button @click="deleteEmployee(index)" class="block text-red-500">Delete</button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div v-else class="list">
        <p class="text-red-500">No loaders at the moment!!</p>
      </div>
    </div>
  </div>
</template>
<template>
    <div>
      <h2>Employee Management</h2>
      <form @submit.prevent="addEmployee">
        <input v-model="employee.name" placeholder="Employee Name" />
        <input v-model="employee.role" placeholder="Role" />
        <button type="submit">Add Employee</button>
      </form>
  
      <ul>
        <li v-for="employee in employees" :key="employee.id">
          {{ employee.name }} - {{ employee.role }}
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  import { useEmployeeStore } from '@/stores/employeeStore';
  
  export default {
    setup() {
      const employeeStore = useEmployeeStore();
      const employee = { name: '', role: '' };
  
      const addEmployee = () => {
        employeeStore.addEmployee(employee);
        localStorage.setItem('employees', JSON.stringify(employeeStore.employees));
      };
  
      return {
        employee,
        employees: employeeStore.employees,
        addEmployee
      };
    }
  };
  </script>
  
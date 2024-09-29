// stores/employeeStore.js
import { defineStore } from 'pinia';

export const useEmployeeStore = defineStore('employeeStore', {
  state: () => ({
    employees: JSON.parse(localStorage.getItem('employees')) || [],
  }),
  actions: {
    addEmployee(employee) {
      this.employees.push({ ...employee, id: Date.now() });
    },
  },
});

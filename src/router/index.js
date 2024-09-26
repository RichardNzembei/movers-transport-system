import { createRouter, createWebHistory } from 'vue-router';
import Dashboard from '../views/Dashboard.vue';
import Members from '../views/Members.vue';
import Vehicles from '../views/Vehicles.vue'; // Import other views as needed

const routes = [
  { path: '/', component: Dashboard },
  { path: '/members', component: Members },
  { path: '/vehicles', component: Vehicles },
  // Add other routes as necessary
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

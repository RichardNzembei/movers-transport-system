import { createRouter, createWebHistory } from 'vue-router';
import Login from '../views/Login.vue';
import AdminDashboard from '../views/AdminDashboard.vue';
import FarmerDashboard from '../views/FarmerDashboard.vue';




const routes = [
  { path: '/', component: Login },
  { path: '/admindashboard', component: AdminDashboard },
  { path: '/farmerdashboard', component: FarmerDashboard },

 

];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

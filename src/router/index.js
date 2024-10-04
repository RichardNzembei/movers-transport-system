import { createRouter, createWebHistory } from 'vue-router';
import Login from '../views/Login.vue';
import AdminDashboard from '../views/AdminDashboard.vue';
import FarmerDashboard from '../views/FarmerDashboard.vue';
import EmployeeManagement from '../components/EmployeeManagement.vue';
import TransportOrders from '../components/TransportOrders.vue';
import RevenueProfits from '../components/RevenueProfits.vue';
import FarmerRegistration from '../components/FarmerRegistration.vue';
import SignUp from '../views/SignUp.vue';
import AdminRegistration from '../components/AdminRegistration.vue';
import Farmers from '../components/Farmers.vue';
import adminProfile from '../components/adminProfile.vue';
import farmerProfile from '../components/farmerProfile.vue';





const routes = [
  { path: '/', component: Login },
  { path: '/signupdashboard', component: SignUp },
  { path: '/admindashboard', component: AdminDashboard },
  { path: '/farmerdashboard', component: FarmerDashboard },
  { path: '/employeedashboard', component: EmployeeManagement },
  { path: '/transportdashboard', component: TransportOrders },
  { path: '/revenuedashboard', component: RevenueProfits },
  { path: '/farmerreg', component: FarmerRegistration },
  { path: '/adminregistration', component: AdminRegistration },
  { path: '/farmers', component: Farmers },
  { path: '/adminprofile', component: adminProfile },
  { path: '/farmerprofile', component: farmerProfile }





];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

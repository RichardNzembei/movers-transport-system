import { createRouter, createWebHistory } from 'vue-router';
import Dashboard from '../views/Dashboard.vue';
import Members from '../views/Members.vue';
import Vehicles from '../views/Vehicles.vue';
import Goods from '../views/Goods.vue';
import Orders from '../views/Orders.vue';
import Loaders from '../views/Loaders.vue';
import Drivers from '../views/Drivers.vue';


const routes = [
  { path: '/', component: Dashboard },
  { path: '/members', component: Members },
  { path: '/vehicles', component: Vehicles },
  { path: '/goods', component: Goods },
  { path: '/orders', component: Orders },
  { path: '/loaders', component: Loaders },
  { path: '/drivers', component:Drivers },

];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

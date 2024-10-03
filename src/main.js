// main.js
import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from './App.vue';
import router from './router';
import { useFarmerStore } from '../src/stores/farmerStote';

const app = createApp(App);

app.use(createPinia());
app.use(router);
const farmerStore = useFarmerStore();
farmerStore.loadFarmers(); // Load farmers when the app initializes

app.mount('#app');

<script setup>
import { ref, onMounted } from "vue";
import adminNav from "./adminNav.vue";

const orders = ref([]);
const drivers = ref([]);
const loaders = ref([]);

const fetchOrdersFromLocalStorage = () => {
  const storedOrders = JSON.parse(localStorage.getItem("orders")) || [];
  orders.value = storedOrders;
};

const fetchDriversAndLoaders = () => {
  drivers.value = [
    { id: 1, name: "Driver A" },
    { id: 2, name: "Driver B" },
  ];

  loaders.value = [
    { id: 1, name: "Loader A" },
    { id: 2, name: "Loader B" },
  ];
};

const assignTransport = (order) => {
  if (!order.assignedDriver || !order.assignedLoader) {
    alert("Please select both a driver and a loader.");
    return;
  }

  const allOrders = JSON.parse(localStorage.getItem("orders")) || [];
  const updatedOrders = allOrders.map((o) => {
    if (o.timestamp === order.timestamp) {
      return {
        ...o,
        assignedDriver: order.assignedDriver,
        assignedLoader: order.assignedLoader,
        status: "Released",
      };
    }
    return o;
  });

  localStorage.setItem("orders", JSON.stringify(updatedOrders));
  fetchOrdersFromLocalStorage();
};
const listenForStorageChanges = () => {
  window.addEventListener("storage", (event) => {
    if (event.key === "orders") {
      fetchOrdersFromLocalStorage();
    }
  });
};

onMounted(() => {
  fetchOrdersFromLocalStorage();
  fetchDriversAndLoaders();
  listenForStorageChanges();
});
</script>

<template>
  <adminNav />
  <div>
    <h2 class="text-xl font-semibold mb-4">Transport Orders</h2>
    <ul>
      <li v-for="order in orders" :key="order.timestamp" class="mb-4">
        <p><strong>Product:</strong> {{ order.productName }}</p>
        <p><strong>Quantity:</strong> {{ order.quantity }} kg</p>
        <p><strong>Total Price:</strong> ${{ order.totalPrice }}</p>
        <p><strong>Farmer:</strong> {{ order.farmerName }}</p>
        <p><strong>Timestamp:</strong> {{ order.timestamp }}</p>

        <!-- Driver Assignment -->
        <div>
          <label>Assign Driver:</label>
          <select v-model="order.assignedDriver">
            <option disabled value="">-- Select Driver --</option>
            <option
              v-for="driver in drivers"
              :key="driver.id"
              :value="driver.name"
            >
              {{ driver.name }}
            </option>
          </select>
        </div>

        <!-- Loader Assignment -->
        <div>
          <label>Assign Loader:</label>
          <select v-model="order.assignedLoader">
            <option disabled value="">-- Select Loader --</option>
            <option
              v-for="loader in loaders"
              :key="loader.id"
              :value="loader.name"
            >
              {{ loader.name }}
            </option>
          </select>
        </div>

        <!-- Assign Button -->
        <button
          @click="assignTransport(order)"
          class="bg-blue-500 text-white p-2 rounded mt-2"
        >
          Assign Transport
        </button>

        <hr />
      </li>
    </ul>
    <p v-if="orders.length === 0">No orders found.</p>
  </div>
</template>

<style scoped>
</style>

<script setup>
import { ref, onMounted, computed } from "vue";
import adminNav from "./adminNav.vue";

const employees = ref([]);
const orders = ref([]);
const isAssignVisible = ref(null);

function toggleAssign(index) {
  if (isAssignVisible.value === index) {
    isAssignVisible.value = null;
  } else {
    isAssignVisible.value = index;
  }
}

const fetchOrdersFromLocalStorage = () => {
  const storedOrders = JSON.parse(localStorage.getItem("orders")) || [];
  orders.value = storedOrders;
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
        status: "On Transit",
      };
    }
    return o;
  });

  localStorage.setItem("orders", JSON.stringify(updatedOrders));
  fetchOrdersFromLocalStorage();

  alert(`Order for ${order.farmerName} is now on transit.`);
};

const listenForStorageChanges = () => {
  window.addEventListener("storage", (event) => {
    if (event.key === "orders") {
      fetchOrdersFromLocalStorage();
    }
  });
};

const loadEmployees = () => {
  const storeEmployees = localStorage.getItem("employees");
  employees.value = storeEmployees ? JSON.parse(storeEmployees) : [];
};

const drivers = computed(() =>
  employees.value.filter((emp) => emp.category === "driver")
);
const loaders = computed(() =>
  employees.value.filter((emp) => emp.category === "loader")
);

onMounted(() => {
  fetchOrdersFromLocalStorage();
  listenForStorageChanges();
  loadEmployees();
});
</script>

<template>
  <adminNav />
  <h2 class="text-xl font-semibold mb-4 text-center">Transport Orders</h2>

  <div class="flex flex-col lg:flex-row justify-center items-start">
    <div class="flex-1 shadow-xl mr-2 w-full">
      <h3 class="font-bold text-blue-500 text-center">Pending Orders</h3>
      <div
        v-for="(order, index) in orders.filter(
          (o) => o.status !== 'On Transit'
        )"
        :key="index"
        class="flex shadow-xl p-2 rounded-xl border border-gray-300 space-x-6"
      >
        <div class="flex-2">
          <span class="font-mono text-gray-700">{{ order.farmerName }}</span>
          <p class="text-blue-300">{{ order.productName }}</p>
          <p class="text-slate-400 ml-6">{{ order.quantity }} kg</p>
          <p class="underline p-2">
            <strong>Total: </strong>{{ order.totalPrice }}
          </p>
        </div>

        <div class="flex-2">
          <img
            src="../assets/icons/actions.png"
            alt="actions icon"
            @click="toggleAssign(index)"
            class="mt-4 h-5 w-5 cursor-pointer rounded-lg shadow-xl bg-slate-100"
          />
          <div
            v-if="isAssignVisible === index"
            class="actions-dropdown absolute bg-white border border-gray-300 p-3 rounded shadow-md"
          >
            <div class="mb-1">
              <label class="font-semibold font-mono">Driver:</label>
              <select v-model="order.assignedDriver" class="rounded-xl p-1">
                <option disabled value="">-- Select Driver --</option>
                <option
                  v-for="driver in drivers"
                  :key="driver.workId"
                  :value="driver.fName"
                >
                  {{ driver.fName }}
                </option>
              </select>
            </div>

            <div>
              <label class="font-semibold font-mono">Loader:</label>
              <select v-model="order.assignedLoader" class="rounded-xl p-1">
                <option disabled value="">-- Select Loader --</option>
                <option
                  v-for="loader in loaders"
                  :key="loader.workId"
                  :value="loader.fName"
                >
                  {{ loader.fName }}
                </option>
              </select>
            </div>

            <button
              @click="assignTransport(order)"
              class="bg-blue-500 text-white p-2 rounded mt-2 hover:text-blue-600 hover:bg-white"
            >
              Assign
            </button>
          </div>
        </div>
      </div>

      <p v-if="orders.filter((o) => o.status !== 'On Transit').length === 0">
        No orders found.
      </p>
    </div>

    <div class="flex-1 shadow-xl w-full">
      <h3 class="font-bold text-green-500 text-center">Transit Orders</h3>
      <div
        v-for="(order, index) in orders.filter(
          (o) => o.status === 'On Transit'
        )"
        :key="index"
        class="flex shadow-xl p-2 rounded-xl border border-gray-300 space-x-6"
      >
        <div class="">
          <span class="font-mono text-gray-700">{{ order.farmerName }}</span>
          <p class="text-blue-300">{{ order.productName }}</p>
          <p class="text-slate-400 ml-6">{{ order.quantity }} kg</p>
          <p class="underline p-2">
            <strong>Total: </strong>{{ order.totalPrice }}
          </p>
        </div>
      </div>

      <p v-if="orders.filter((o) => o.status === 'On Transit').length === 0">
        No transit orders found.
      </p>
    </div>
  </div>
</template>

<style scoped>
.actions-dropdown {
  position: absolute;
  z-index: 1000;
}
</style>

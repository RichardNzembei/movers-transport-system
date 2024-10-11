<script setup>
import FarmerNav from "./FarmerNav.vue";
import { ref, computed, onMounted } from "vue";

const storedFarmers = JSON.parse(localStorage.getItem("farmers")) || [];
const loggedInEmail = localStorage.getItem("loggedInUserEmail");
const currentFarmer = ref(null);

if (loggedInEmail) {
  currentFarmer.value = storedFarmers.find(
    (farmer) => farmer.email === loggedInEmail
  );
}

const products = ref([]);
const selectedCategory = ref(null);
const selectedProduct = ref(null);
const quantity = ref(0);
const totalPrice = ref(0);
const showModal = ref(false);
const orderDetails = ref(null);
const orders = ref([]);

const fetchProducts = async () => {
  try {
    const response = await fetch("/products.json");
    const data = await response.json();

    products.value = data.herbicides.concat(
      data.insecticides,
      data.pesticides,
      data.fertilizers
    );
  } catch (error) {
    console.error("Error fetching products:", error);
  }
};

const categories = computed(() => {
  const uniqueCategories = new Set(products.value.map((p) => p.category));
  return [...uniqueCategories];
});

const availableProducts = computed(() => {
  if (selectedCategory.value) {
    return products.value.filter((p) => p.category === selectedCategory.value);
  }
  return [];
});

const updateTotalPrice = () => {
  if (selectedProduct.value && quantity.value > 0) {
    totalPrice.value = selectedProduct.value.pricePerKg * quantity.value;
  } else {
    totalPrice.value = 0;
  }
};

const submitOrder = () => {
  if (selectedProduct.value && quantity.value > 0) {
    if (currentFarmer.value) {
      orderDetails.value = {
        farmerName: `${currentFarmer.value.fName} ${currentFarmer.value.lName}`,
        farmerId: currentFarmer.value.NationalId,
        farmerType: currentFarmer.value.type,
        farmerLocation: currentFarmer.value.county,
        category: selectedCategory.value,
        productName: selectedProduct.value.name,
        pricePerKg: selectedProduct.value.pricePerKg,
        quantity: quantity.value,
        totalPrice: totalPrice.value,
        timestamp: new Date().toISOString(),
        status: "Pending",
      };
      storeOrderInLocalStorage(orderDetails.value);
      orders.value.push(orderDetails.value);

      showModal.value = true;

      selectedCategory.value = null;
      selectedProduct.value = null;
      quantity.value = 0;
      totalPrice.value = 0;
    } else {
      alert("Farmer information is missing. Please log in again.");
    }
  } else {
    alert("Please select a product and enter a valid quantity.");
  }
};

const storeOrderInLocalStorage = (order) => {
  const existingOrders = JSON.parse(localStorage.getItem("orders")) || [];
  existingOrders.push(order);
  localStorage.setItem("orders", JSON.stringify(existingOrders));
};

const fetchOrdersFromLocalStorage = () => {
  const storedOrders = JSON.parse(localStorage.getItem("orders")) || [];

  if (currentFarmer.value) {
    orders.value = storedOrders.filter(
      (order) => order.farmerId === currentFarmer.value.NationalId
    );
  }
};

const listenForStorageChanges = () => {
  window.addEventListener("storage", (event) => {
    if (event.key === "orders") {
      fetchOrdersFromLocalStorage();
    }
  });
};

onMounted(fetchProducts);
onMounted(() => {
  fetchOrdersFromLocalStorage();
  listenForStorageChanges();
});

const pendingOrders = computed(() => {
  return orders.value.filter((order) => order.status === "Pending");
});
</script>

<template>
  <FarmerNav />
  <div class="flex flex-col xl:flex-row mt-4 space-x-2">
    <div class="flex-1 shadow-xl rounded-xl p-2">
      <h2 class="text-xl font-semibold mb-4 text-center">Place Your Order</h2>

      <div class="mb-4">
        <label class="block mb-2">Select Category</label>
        <select v-model="selectedCategory" class="w-full p-2 border rounded">
          <option disabled value="">-- Select a category --</option>
          <option
            v-for="category in categories"
            :key="category"
            :value="category"
          >
            {{ category }}
          </option>
        </select>
      </div>

      <div class="mb-4" v-if="selectedCategory">
        <label class="block mb-2">Select Product</label>
        <select v-model="selectedProduct" class="w-full p-2 border rounded">
          <option disabled value="">-- Select a product --</option>
          <option
            v-for="product in availableProducts"
            :key="product.id"
            :value="product"
          >
            {{ product.name }} ({{ product.pricePerKg }} $/kg)
          </option>
        </select>
      </div>

      <div class="mb-4" v-if="selectedProduct">
        <label class="block mb-2">Quantity (Kgs)</label>
        <input
          type="number"
          v-model.number="quantity"
          @input="updateTotalPrice"
          class="w-full p-2 border rounded"
          min="1"
          placeholder="Enter quantity in kgs"
        />
      </div>

      <div class="mb-4" v-if="totalPrice > 0">
        <p class="text-lg font-semibold">Total Price: ${{ totalPrice }}</p>
      </div>

      <button
        @click="submitOrder"
        class="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
      >
        Submit Order
      </button>

      <div
        v-if="showModal"
        class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
      >
        <div class="bg-white p-4 rounded shadow-lg">
          <h3 class="text-lg font-semibold mb-2">Order Submitted</h3>
          <p>
            Your order for {{ orderDetails.productName }} has been placed
            successfully!
          </p>
          <button
            @click="showModal = false"
            class="mt-4 bg-blue-500 text-white p-2 rounded"
          >
            Close
          </button>
        </div>
      </div>
    </div>

    <div class="flex-1 shadow-xl rounded-xl p-2">
      <h2 class="text-xl font-semibold mb-4 text-center">All Your Orders</h2>
      <div>
        <ul v-for="order in orders" :key="order.timestamp" class="mb-4">
          <li>
            <span>{{ order.productName }}</span>
            <span class="ml-4">{{ order.quantity }} Kgs</span>
            <span
              class="ml-4 font-semibold"
              :class="{
                'text-green-500': order.status === 'On Transit',
                'text-yellow-500': order.status === 'Pending',
              }"
            >
              Status: {{ order.status }}
            </span>
          </li>
        </ul>
      </div>
    </div>

    <div class="flex-1 shadow-xl rounded-xl p-2">
      <h2 class="text-xl font-semibold mb-4 text-center">
        Track Pending Orders
      </h2>
      <div class="items-center justify-center">
        <ul v-for="order in pendingOrders" :key="order.timestamp" class="mb-4">
          <span class="block">{{ order.productName }}</span>
          <span class="ml-8">{{ order.quantity }} Kgs</span>
          <span class="ml-4 font-semibold text-yellow-500">
            Status: {{ order.status }}
          </span>
        </ul>
        <p v-if="pendingOrders.length === 0">No pending orders.</p>
      </div>
    </div>
  </div>
</template>

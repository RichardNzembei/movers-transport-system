
<template>
  <div
    v-if="isVisible"
    class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
  >
    <div class="bg-white p-4 rounded shadow-md max-w-sm w-full">
      <h2 class="text-lg font-semibold mb-4">Order Confirmation</h2>
      <p><strong>Product:</strong> {{ order.productName }}</p>
      <p><strong>Quantity:</strong> {{ order.quantity }} kg</p>
      <p><strong>Total Price:</strong> ${{ order.totalPrice }}</p>
      <button
        @click="closeModal"
        class="mt-4 w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
      >
        Close
      </button>
    </div>
  </div>
</template>
  
  <script setup>
import { ref, defineProps } from "vue";

const props = defineProps({
  isVisible: {
    type: Boolean,
    required: true,
  },
  order: {
    type: Object,
    required: true,
  },
});

const emit = defineEmits(["close"]);
const closeModal = () => {
  emit("close");
};
</script>

  
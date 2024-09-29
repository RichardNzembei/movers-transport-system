// stores/ordersStore.js
import { defineStore } from 'pinia';

export const useOrdersStore = defineStore('ordersStore', {
  state: () => ({
    orders: JSON.parse(localStorage.getItem('orders')) || [],
  }),
  actions: {
    addOrder(order) {
      this.orders.push({ ...order, id: Date.now() });
    },
  },
});

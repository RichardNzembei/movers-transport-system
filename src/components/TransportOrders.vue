<template>
    <div>
      <h2>Transport Orders</h2>
      <form @submit.prevent="addOrder">
        <input v-model="order.goods" placeholder="Goods" />
        <input v-model="order.vehicle" placeholder="Vehicle" />
        <button type="submit">Add Order</button>
      </form>
  
      <table>
        <thead>
          <tr>
            <th>Goods</th>
            <th>Vehicle</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="order in orders" :key="order.id">
            <td>{{ order.goods }}</td>
            <td>{{ order.vehicle }}</td>
            <td>{{ order.status }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </template>
  
  <script>
  import { useOrdersStore } from '../stores/ordersStore';
  
  export default {
    setup() {
      const ordersStore = useOrdersStore();
      const order = { goods: '', vehicle: '', status: 'Pending' };
  
      const addOrder = () => {
        ordersStore.addOrder(order);
        localStorage.setItem('orders', JSON.stringify(ordersStore.orders));
      };
  
      return {
        order,
        orders: ordersStore.orders,
        addOrder
      };
    }
  };
  </script>
  
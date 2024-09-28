<script setup>
import { ref, onMounted, shallowRef } from "vue";
import membeReport from "../components/membeReport.vue";
import memberForm from "../components/memberForm.vue";
import memberTable from "../components/memberTable.vue";
import { useRouter } from "vue-router";

const router = useRouter();
const currentView = shallowRef(memberTable);

const members = ref([]);

const addMember = (newMember) => {
  members.value.push(newMember);
  currentView.value = memberTable;
};
const handleHashchange = () => {
  const hash = window.location.hash.substring(1);
  if (hash === "AddNewMember") {
    currentView.value = memberForm;
  } else if (hash === "Reports") {
    currentView.value = membeReport;
  } else {
    currentView.value = memberTable;
  }
};

onMounted(() => {
  window.addEventListener("hashchange", handleHashchange);
  handleHashchange();
});
</script>

<template>
  <div class="container">
    <h2>Members Management</h2>

    <div class="memberState">
      <a class="memberState-item" href="#Members">Members</a>
      <a class="memberState-item" href="#AddNewMember">Add New Member</a>
      <a class="memberState-item" href="#Reports">Reports</a>
    </div>

    <component :is="currentView" :members="members" @submit="addMember" />
  </div>
</template>

<style scoped>
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  font-family: Arial, sans-serif;
}

.memberState {
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-bottom: 20px;
}

.memberState-item {
  text-decoration: none;
  color: #5b8eaf;
  font-weight: bold;
  padding: 10px 15px; /* Add padding for clickable area */
  border-radius: 5px;
  border: 1px solid transparent; /* Add a transparent border */
  transition: background 0.3s, border-color 0.3s; /* Smooth transition */
}

.memberState-item:hover {
  background-color: #f0f0f0;
  color: #000;
  border-color: #5b8eaf;
}

h2 {
  text-align: center;
  font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
  margin-bottom: 20px;
}

@media (max-width: 600px) {
  .memberState {
    flex-direction: column;
    gap: 10px;
  }

  .memberState-item {
    padding: 8px;
    font-size: 16px;
  }

  h2 {
    font-size: 24px;
  }
}
</style>


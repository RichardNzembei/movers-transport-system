<script setup>
import { ref } from "vue";

const member = ref({
  name: "",
  Id: "",
  share: "",
  contribution: "",
  order: "",
});

const emit = defineEmits(["submit"]);

const AddNewMember = () => {
  emit("submit", { ...member.value });

  member.value = {
    name: "",
    Id: "",
    share: "",
    contribution: "",
    order: "",
  };
};
</script>
<template>
  <div class="members">
    <form @submit.prevent="AddNewMember" class="form">
      <label for="Name">Name</label><br />
      <input type="text" v-model="member.name" required /><br />

      <label for="NationalId">National Id No</label><br />
      <input type="text" v-model="member.Id" required /><br />

      <label for="Shares">Shares</label><br />
      <input type="text" v-model="member.share" required /><br />

      <label for="Contribution">Contribution</label><br />
      <input type="text" v-model="member.contribution" required /><br />

      <label for="Orders">Orders</label><br />
      <input type="text" v-model="member.order" required /><br />

      <button type="submit">Add</button>
    </form>
  </div>
</template>
  
  <style scoped>
.members {
  padding: 20px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.form {
  background-color: white;
  border-radius: 10px;
  padding: 40px;
  font-size: 18px;
  width: 300px;
}

input {
  background-color: aliceblue;
  border: none;
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
}

input:hover {
  background-color: whitesmoke;
}

button {
  color: #fff;
  background: linear-gradient(315deg, #42d392 25%, #647eff);
  padding: 10px;
  border-radius: 5px;
  width: 100%;
  cursor: pointer;
}

button:hover {
  background-color: #36a375;
}

h4 {
  font-size: 20px;
}
</style>
  
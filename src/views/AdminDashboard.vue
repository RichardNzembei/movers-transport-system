<script setup>
import {ref} from 'vue'
import {useDropdownStore} from '../stores/dropdownStore'
import {useRouter} from 'vue-router'
const router=useRouter()
const store=useDropdownStore()
const logout=()=>{
  router.push('/')
}
</script>
    <template>
  <div class="dropdown-container">
    <img src="../assets/icons/menu.png" alt="menu icon" @click="store.toggleDropdown">
    <span @click="logout">logout</span>
    <div class="dropdown-menu" v-if="store.isDropdownVisible">
      <router-link to="/employeedashboard" class="dropdown-item">Employees</router-link>
    <router-link to="/transportdashboard" class="dropdown-item">Transport Orders</router-link>
    <router-link to="/revenuedashboard" class="dropdown-item">Revenue & Profits</router-link>
    </div>
 

  </div>
</template>
<style scoped>
.dropdown-container{
  display: inline-block;
  position: relative;
  margin: 5px;
  border-bottom: 2px solid black;
  width: 100%;
}
.dropdown-container img{
  height: 20px;
  width: 20px;
  
}
.dropdown-menu{
  position: absolute;
  top: 100%;
  left: 0;
  background-color: white;
  border-radius: 5px;
  z-index: 1;
  margin: 4px;
  width: max-content;
  border-bottom: 2px solid black;
}
.dropdown-item{
  display: block;
  padding: 10px 15px;
  text-decoration: none;
  color: #000;
}
.dropdown-item:hover{
  color: #51719c;
  background-color: azure;
}
</style>


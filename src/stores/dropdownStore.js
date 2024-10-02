import { defineStore } from "pinia";
import {ref} from 'vue'
export const useDropdownStore=defineStore('dropdownStore',()=>{
    const isDropdownVisible=ref(false)
    function toggleDropdown(){
        isDropdownVisible.value=!isDropdownVisible.value
    }
    return {isDropdownVisible,toggleDropdown}
})
<script>


export default {
  name: 'App',
  components: {
    Header,
  },
};
</script>
<template>
  <div id="app" class="app">
   
    <router-view />
  </div>
</template>



<style>
.app{
  background-color: aliceblue;
  height: 1000px;
}
</style>

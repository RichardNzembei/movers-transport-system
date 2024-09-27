<script>
import Header from './components/Header.vue';

export default {
  name: 'App',
  components: {
    Header,
  },
};
</script>
<template>
  <div id="app" class="app">
    <Header />
    <router-view />
  </div>
</template>



<style>
.app{
  background-color: aliceblue;
  height: 1000px;
}
</style>

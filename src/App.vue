<template>
  <v-app>
    <v-main>
      <sidebar></sidebar>
      <nav-title></nav-title>
       <nav-price></nav-price>
       <router-view></router-view>
       <navbar></navbar>
    </v-main>
  </v-app>
</template>

<script>
import Sidebar from './layouts/Sidebar.vue';
import NavTitle from './layouts/NavTitle.vue';
import NavPrice from './layouts/NavPrice.vue';
import Navbar from './layouts/Navbar.vue';
export default {
  name:'App',
  components:{
    Sidebar,
    NavTitle,
    NavPrice,
    Navbar,
  },
};
</script>
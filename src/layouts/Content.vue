<template>
   <v-container class="maincontainer" fluid>
        <sidebar></sidebar>
        <nav-title></nav-title>
        <nav-price></nav-price>
          <v-sheet>
          </v-sheet>
        <navbar></navbar>
   </v-container>
</template>
<script>
import Sidebar from '../layouts/Sidebar.vue';
import Navbar from './Navbar.vue';
import NavPrice from './NavPrice.vue';
import NavTitle from './NavTitle.vue';
export default {
  components:{
    Sidebar,
    NavTitle,
    NavPrice,
    Navbar
  },
};
</script>
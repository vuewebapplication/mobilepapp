<template>
  <v-app>
    <v-main>
      <sidebar></sidebar>
      <nav-title></nav-title>

      <main
        id="scroll-threshold-example"
        class="overflow-y-auto pb-16"
        height="95vh"
      >
        <v-card class="mx-auto overflow-hidden" max-width="500">
          <nav-price></nav-price>

          <v-container fluid>
            <router-view></router-view>
            <navbar></navbar>
          </v-container>
        </v-card>
      </main>
    </v-main>
  </v-app>
</template>

<script>
import Sidebar from "./layouts/Sidebar.vue";
import NavTitle from "./layouts/NavTitle.vue";
import NavPrice from "./layouts/NavPrice.vue";
import Navbar from "./layouts/Navbar.vue";
export default {
  name: "App",
  components: {
    Sidebar,
    NavTitle,
    NavPrice,
    Navbar,
  },
};
</script>
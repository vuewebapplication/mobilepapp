<template>
  <v-bottom-navigation fixed color="primary" scroll-threshold="500">
      <v-btn  color="accent-4"  @click="drawer = !drawer" :to="'home'">
        <span>Home</span>
        <center>
          <v-icon>{{ icons.mdiHomeAccount }}</v-icon>
        </center>
      </v-btn>

      <v-btn color="accent-4" :to="'members'" @click="drawer = !drawer">
        <span>Member</span>
        <center>
          <v-icon>{{ icons.mdiAccountGroupOutline }}</v-icon>
        </center>
      </v-btn>

      <v-btn color="accent-4" :to="'tasks'" @click="drawer = !drawer">
        <span>Tasks</span>
        <center>
          <v-icon>{{ icons.mdiCheckboxMarkedCirclePlusOutline }}</v-icon>
        </center>
      </v-btn>

      <v-btn color="accent-4" :to="'records'" @click="drawer = !drawer">
        <span>Records</span>
        <center>
          <v-icon>{{ icons.mdiBallotRecountOutline }}</v-icon>
        </center>
      </v-btn>

      <v-btn color="accent-4"  @click="drawer = !drawer">
        <span>My</span>
        <center>
          <v-icon>{{ icons.mdiAccountDetailsOutline }}</v-icon>
        </center>
      </v-btn>

  
  </v-bottom-navigation>
</template>
<script>
export default {
  name: "Navbar",
   
};
</script>
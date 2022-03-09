<template>
  <v-bottom-navigation fixed color="primary" scroll-threshold="500">
      <v-btn  color="accent-4"  @click="drawer = !drawer"  :to="{ name: 'home'}" >
        <span>Home</span>
        <center>
          <v-icon>{{ icons.mdiHomeAccount }}</v-icon>
        </center>
      </v-btn>

      <v-btn color="accent-4" :to="{ name: 'members'}" @click="drawer = !drawer">
        <span>Member</span>
        <center>
          <v-icon>{{ icons.mdiAccountGroupOutline }}</v-icon>
        </center>
      </v-btn>

      <v-btn color="accent-4" :to="{ name: 'tasks'}"  @click="drawer = !drawer">
        <span>Tasks</span>
        <center>
          <v-icon>{{ icons.mdiCheckboxMarkedCirclePlusOutline }}</v-icon>
        </center>
      </v-btn>

      <v-btn color="accent-4" :to="{ name: 'records'}" @click="drawer = !drawer">
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
import { ref } from '@vue/composition-api'
export default {
  name: "Navbar",
   setup(){
    const drawer = ref(false)
    const group = ref(null)
    return {
      drawer,
      group,
    }
  },
  watch: {
    group() {
      this.drawer = false;
    },
  },
};
</script>
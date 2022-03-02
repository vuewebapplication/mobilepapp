<template>
  <v-container>
    <v-navigation-drawer v-model="drawer" temporary app>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="text-h6"> Application </v-list-item-title>
          <v-list-item-subtitle> subtext </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list dense nav>
        <v-list-item
          @click="drawer = false"
          v-for="item in items"
          :key="item.title"
          link
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app color="deep-purple accent-4" dark flat>
      <v-toolbar-title>Spin to win</v-toolbar-title>
      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>
    </v-app-bar>

   
    <main>

      <v-card
    class="mx-auto overflow-hidden"
    max-width="500"
  >

  
    <v-bottom-navigation
     absolute
      color="white"
      hide-on-scroll
      scroll-target="#scroll-threshold-example"
      scroll-threshold="500"
    >
       <v-btn color="accent-4" @click="drawer = !drawer">
            <span>Home</span>
            <center>
              <v-icon>{{ icons.mdiHomeAccount }}</v-icon>
            </center>
          </v-btn>

          <v-btn color="accent-4" @click="drawer = !drawer">
            <span>Member</span>
            <center>
              <v-icon>{{ icons.mdiAccountGroupOutline }}</v-icon>
            </center>
          </v-btn>

          <v-btn color="accent-4" @click="drawer = !drawer">
            <span>Tasks</span>
            <center>
              <v-icon>{{ icons.mdiCheckboxMarkedCirclePlusOutline }}</v-icon>
            </center>
          </v-btn>

          <v-btn color="accent-4" @click="drawer = !drawer">
            <span>Record</span>
            <center>
              <v-icon>{{ icons.mdiBallotRecountOutline }}</v-icon>
            </center>
          </v-btn>

          <v-btn color="accent-4" @click="drawer = !drawer">
            <span>My</span>
            <center>
              <v-icon>{{ icons.mdiAccountDetailsOutline }}</v-icon>
            </center>
          </v-btn>
    </v-bottom-navigation>

    <v-sheet
      id="scroll-threshold-example"
      class="overflow-y-auto pb-16"
      max-height="90vh"
    >
      <v-responsive height="100vh">

         <v-parallax
      dark
      height="350"
      src="https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg"
    >
      <v-row align="center" justify="center">
        <v-col class="text-center" cols="12">
          <h1 class="text-h4 font-weight-thin mb-4">PHP 1000.00 test</h1>
          <h4 class="subheading">Winning Prices</h4>
        </v-col>
      </v-row>
    </v-parallax>
    
      </v-responsive>
    </v-sheet>
  </v-card>
   
    
    </main>
  </v-container>
</template>

<script>
import {
  mdiAccountMultipleCheck,
  mdiHomeAccount,
  mdiAccountGroupOutline,
  mdiCheckboxMarkedCirclePlusOutline,
  mdiBallotRecountOutline,
  mdiAccountDetailsOutline,
} from "@mdi/js";
export default {
  name: "HelloWorld",
  data() {
    return {
      currentItem: "tab-Web",
      itemss: ["Web", "Shopping", "Videos", "Images"],
      more: ["News", "Maps", "Books", "Flights", "Apps"],
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      drawer: false,
      group: null,
      tabs: null,
      items: [
        { title: "Home", icon: "mdi-home-city" },
        { title: "My Account", icon: "mdi-account" },
        { title: "Users", icon: "mdi-account-group-outline" },
      ],
      icons: {
        mdiAccountMultipleCheck,
        mdiAccountGroupOutline,
        mdiHomeAccount,
        mdiCheckboxMarkedCirclePlusOutline,
        mdiBallotRecountOutline,
        mdiAccountDetailsOutline,
      },
      right: null,
    };
  },
  watch: {
    group() {
      this.drawer = false;
    },
  },
};
</script>
<style>
.v-item-group.v-bottom-navigation {
  z-index: 1 !important;
  border-radius: 0px !important;

  border: none !important;
  box-shadow: none !important;
  left: 0 !important;
  right: 0 !important;
  bottom: 0 !important;
}
.v-item-group.v-bottom-navigation .v-btn{
  background-color: white;
    border-radius: 0;
    box-shadow: none;
    flex: 0 1 auto;
    font-size: 0.75rem;
    height: inherit;
    max-width: 168px;
    min-width: 80px;
    position: relative;
    text-transform: none;
}
.v-app-bar--fixed {
  height: 64px;
  margin-top: 0px;
  transform: translateY(0px);
  width: 27.5rem !important;
  margin: 0 auto !important;
}
.v-navigation-drawer {
  margin: 0 auto !important;
}
.v-navigation-drawer--fixed {
  position: absolute !important;
}
.v-overlay__scrim {
  top: 0 !important;
  width: 27.5rem !important;
  margin: 0 auto !important;
}
body {
  background-color: #f5f5f5;
  transition: background-color 0.3s ease;
  -webkit-transition: background-color 0.3s ease;
  position: relative;
  left: 0;
  right: 0;
  margin: 0 auto !important;
  max-width: 27.5rem !important;
  cursor: pointer;
}
.v-main {
  padding: 8px 0px 0px 256px;
  width: 100% !important;
  overflow: hidden !important;
}

.container {
  max-width: 100% !important;
  margin: 0 !important;
  padding: 0 !important;
  overflow: hidden !important;
}

@media (max-width: 960px) {
 .v-btn:not(.v-btn--round).v-size--default {
    height: 56px !important;
    min-width: 64px;
    padding: 0 16px;
}
.theme--light.v-btn.v-btn--has-bg {
    background-color: #ffffff !important;
}
  .v-main {
    padding: 8px 0px 0px 0px;
    width: 100% !important;
  }
  .v-parallax {
    height: 250px !important;
  }
  .v-parallax h1 {
    margin-top: 50px !important;
  }
 
}
</style>
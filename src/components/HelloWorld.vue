<template>
  <v-container>
    <v-navigation-drawer  v-model="drawer" temporary app>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="text-h6"> Application </v-list-item-title>
          <v-list-item-subtitle> subtext </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list dense nav >
        <v-list-item  @click="drawer = false" v-for="item in items" :key="item.title" link>
          <v-list-item-icon >
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content >
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app color="deep-purple accent-4" dark flat>
      <v-app-bar-nav-icon app @click="drawer = !drawer"> </v-app-bar-nav-icon>

      <v-toolbar-title>Spin to win</v-toolbar-title>
      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>
    </v-app-bar>

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
    <main>
      <v-card>
        <v-toolbar  flat>
          <template >
            <v-tabs v-model="tabs" fixed-tabs>
              <v-tabs-slider></v-tabs-slider>
              <v-tab href="#mobile-tabs-5-1" class="primary--text">
                <v-icon>{{icons.mdiAccountMultipleCheck}}</v-icon>
              </v-tab>
              
              <v-tab href="#mobile-tabs-5-2" class="primary--text">
                <v-icon>mdi-heart</v-icon>
              </v-tab>

              <v-tab href="#mobile-tabs-5-3" class="primary--text">
                <v-icon>mdi-account-box</v-icon>
              </v-tab>
            </v-tabs>
          </template>
        </v-toolbar>

        <v-tabs-items v-model="tabs">
          <v-tab-item v-for="i in 3" :key="i" :value="'mobile-tabs-5-' + i">
            <v-card flat>
              <v-card-text v-text="text"></v-card-text>
            </v-card>
          </v-tab-item>
        </v-tabs-items>
      </v-card>
    </main>
  </v-container>
</template>

<script>
import { mdiAccountMultipleCheck } from '@mdi/js';
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
          { title: 'Home', icon: 'mdi-home-city' },
          { title: 'My Account', icon: 'mdi-account' },
          { title: 'Users', icon: 'mdi-account-group-outline' },
        ],
      icons:{
        mdiAccountMultipleCheck
      },
      right: null,
    };
  },
  watch: {
      group () {
        this.drawer = false
      },
    },
};
</script>
<style>
.v-app-bar--fixed{
height: 64px;
    margin-top: 0px;
    transform: translateY(0px);
width: 27.5rem !important;
    margin: 0 auto!important;
}
.v-navigation-drawer{
    margin: 0 auto!important;
}
.v-navigation-drawer--fixed{
  position: absolute !important;
}
.v-overlay__scrim{
  top:0 !important;
  width: 27.5rem !important;
  margin: 0 auto!important;
}
body{
    background-color: #f5f5f5;
    transition: background-color .3s ease;
    -webkit-transition: background-color .3s ease;
    position: relative;
    left: 0;
    right: 0;
    margin: 0 auto!important;
    max-width: 27.5rem !important;
    cursor: pointer;
}
.v-main {
  padding: 8px 0px 0px 256px;
  width: 100% !important;
}
.v-parallax{
  top:-100px;
}
.container {
  max-width: 100% !important;
  margin: 0 !important;
  padding: 0 !important;
}
.v-card{
  top:-100px;
}
@media (max-width: 960px) {
  .v-main {
  padding: 8px 0px 0px 0px;
    width: 100% !important;
  }
  .v-parallax{
    height: 250px !important;
    top:0px;
  }
  .v-parallax h1{
    margin-top: 50px !important;
  }
  .v-card{
    top:0px;
  }
}
</style>
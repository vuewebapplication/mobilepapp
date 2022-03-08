<template>
  <v-app>
    <v-main>
      <v-container class="maincontainer" fluid>
         
          <sidebar/>
        <main
          id="scroll-threshold-example"
          class="overflow-y-auto pb-16"
          height="95vh"
        >
          <v-card class="mx-auto overflow-hidden" max-width="500">
            
            <v-container fluid>
              <v-sheet>
               
              </v-sheet>

             
            </v-container>
          </v-card>
        </main>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import sidebar from '../layouts/Sidebar.vue'
import Navtitle from '../layouts/Navtitle.vue'
import NavPrice from '../layouts/NavPrice.vue'
export default {
  name: "HelloWorld",
  components:{
    sidebar,
    NavPrice,
    Navtitle,
  },
  data() {
    return {
      currentItem: "tab-Web",
      itemss: ["Web", "Shopping", "Videos", "Images"],
      more: ["News", "Maps", "Books", "Flights", "Apps"],
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      drawer: false,
      group: null,
      tabs: null,
      cards: [
        {
          title: "Favorite road trips",
          src: "https://cdn.vuetifyjs.com/images/cards/road.jpg",
          flex: 12,
        },
        {
          title: "Favorite road trips",
          src: "https://cdn.vuetifyjs.com/images/cards/road.jpg",
          flex: 6,
        },
        {
          title: "Best airlines",
          src: "https://cdn.vuetifyjs.com/images/cards/plane.jpg",
          flex: 6,
        },
      ],
      items: [
        { title: "Home", icon: mdiHomeAccount },
        { title: "My Account", icon: mdiAccountDetailsOutline },
        { title: "Users", icon: mdiAccountGroupOutline },
      ],
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
.imgbox {
  margin-top: 100px !important;
}
.fixedtitle {
  position: fixed !important;
  width: 27.5rem !important;
  height: 100px !important;
  display: block !important;
  background-color: #6200ea !important;
  border-color: #6200ea !important;
  z-index: 1;
  padding: 15px !important;
}
.v-sheet.v-card {
  border-radius: 0px !important;
}

.theme--light.v-card {
  color: rgb(255 255 255) !important;
}
.v-item-group.v-bottom-navigation {
  z-index: 1 !important;
  border-radius: 0px !important;
  border: none !important;
  box-shadow: none !important;
}
.v-item-group.v-bottom-navigation .v-btn {
  background-color: white;
  border-radius: 0;
  box-shadow: none;
  flex: 0 1 auto;
  font-size: 0.75rem;
  height: inherit;
  position: relative;
  text-transform: none;
}

.v-item-group.v-bottom-navigation--fixed {
  bottom: 0 !important;
  left: 0 !important;
  width: 27.5rem !important;
  margin: 0 auto !important;
  right: 0 !important;
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
  position: fixed !important;
  width: 27.5rem !important;
  height: 100% !important;
  bottom: 0px !important;
  right: 0% !important;
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

.maincontainer {
  max-width: 100% !important;
  padding: 0px !important;
  margin: 0 !important;
}

@media (max-width: 960px) and (max-width: 640) {
  .v-item-group.v-bottom-navigation--fixed {
    bottom: 0 !important;
    left: 0 !important;
    width: 100% !important;
    margin: 0 auto !important;
    right: 0 !important;
  }
  .v-item-group.v-bottom-navigation .v-btn {
    background-color: white;
    border-radius: 0;
    box-shadow: none;
    flex: 0 1 auto;
    font-size: 0.75rem;
    height: inherit;
    max-width: 166px !important;
    min-width: 0px !important;
    position: relative;
    text-transform: none;
  }
  .v-app-bar--fixed {
    height: 64px;
    margin-top: 0px;
    transform: translateY(0px);
    width: 27.5rem !important;
  }
  .v-navigation-drawer {
    margin: 0 !important;
  }
  .v-navigation-drawer--fixed {
    position: fixed !important;
    height: 100% !important;
    bottom: 0px !important;
    right: 0% !important;
    left: 0px !important;
  }
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
    height: 200px !important;
  }
  .v-parallax h1 {
    margin-top: 20px !important;
  }
}
</style>
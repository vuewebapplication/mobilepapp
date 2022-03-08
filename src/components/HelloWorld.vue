<template>
  <v-container class="maincontainer" fluid>
    <v-navigation-drawer v-model="drawer" temporary app>
      <v-divider></v-divider>
      <v-toolbar color="#6200ea" dark flat>
        <v-toolbar-title >Your Dashboard</v-toolbar-title>

        <v-spacer></v-spacer>

        <v-btn icon >
          <v-icon>{{ icons.mdiEmailOutline }}</v-icon>
        </v-btn>
      </v-toolbar>
      <v-list-item two-line>
        <v-list-item-avatar>
          <img src="https://randomuser.me/api/portraits/women/81.jpg" />
        </v-list-item-avatar>

        <v-list-item-content>
          <v-list-item-title>Jucel Estribo</v-list-item-title>
          <v-list-item-subtitle>Logged In</v-list-item-subtitle>
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
      <v-toolbar-title>E-Wallet</v-toolbar-title>
      <v-spacer></v-spacer>

      <!-- <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn> -->

      <v-btn icon>
        <v-icon>{{ icons.mdiEmailOutline }}</v-icon>
      </v-btn>
    </v-app-bar>

    <main
      id="scroll-threshold-example"
      class="overflow-y-auto pb-16"
      height="95vh"
    >
      <v-card class="mx-auto overflow-hidden" max-width="500">
        <v-card fixed class="text-center fixedtitle" elevation="1" outlined>
          <h4>
            <sup style="top: -15px">PHP</sup>
            <span class="text-h4 font-weight-bold mb-2">1000.00 </span>
          </h4>
          <h4 class="subheading">Winning Prize</h4>
        </v-card>
        <v-container fluid>
          <v-sheet>
            <v-responsive>
              <v-row dense class="mx-auto imgbox">
                <v-col
                  v-for="card in cards"
                  :key="card.title"
                  :cols="card.flex"
                >
                  <v-card>
                    <v-img
                      :src="card.src"
                      class="white--text align-end"
                      gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
                      height="200px"
                    >
                      <v-card-title v-text="card.title"></v-card-title>
                    </v-img>

                    <v-card-actions>
                      <v-spacer></v-spacer>

                      <v-btn icon>
                        <v-icon>mdi-heart</v-icon>
                      </v-btn>

                      <v-btn icon>
                        <v-icon>mdi-bookmark</v-icon>
                      </v-btn>

                      <v-btn icon>
                        <v-icon>mdi-share-variant</v-icon>
                      </v-btn>
                    </v-card-actions>
                  </v-card>
                </v-col>
              </v-row>
            </v-responsive>
          </v-sheet>

          <v-bottom-navigation fixed color="primary" scroll-threshold="500">
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
        </v-container>
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
  mdiEmailOutline,
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
      icons: {
        mdiAccountMultipleCheck,
        mdiAccountGroupOutline,
        mdiHomeAccount,
        mdiCheckboxMarkedCirclePlusOutline,
        mdiBallotRecountOutline,
        mdiAccountDetailsOutline,
        mdiEmailOutline,
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
    margin: 0  !important;
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
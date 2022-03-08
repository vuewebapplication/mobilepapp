<template>
  <v-navigation-drawer v-model="drawer" temporary app>
    <v-divider></v-divider>
    <v-toolbar color="#6200ea" dark flat>
      <v-toolbar-title>Your Dashboard</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon>
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
</template>
<script>
export default {
  name: "Sidebar",
}
</script>
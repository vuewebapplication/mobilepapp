<template>
  <v-app-bar app color="deep-purple accent-4" dark flat>
    <v-toolbar-title>E-Wallet</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-btn icon>
      <v-icon>{{ icons.mdiEmailOutline }}</v-icon>
    </v-btn>
  </v-app-bar>
</template>

<script>
export default {
  name: "NavTitle",
}
</script>
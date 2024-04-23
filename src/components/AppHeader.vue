<template>
    <v-app-bar :elevation="5">
      <template v-slot:prepend>
        <v-app-bar-nav-icon
          @click="$store.dispatch('toggleDrawer')"
        ></v-app-bar-nav-icon>
      </template>
      <template v-slot:append>
        <v-avatar color="primary">
          <v-icon icon="mdi-account-circle"></v-icon>
        </v-avatar>
      </template>
    </v-app-bar>
  </template>
  
  <script>
  </script>
  
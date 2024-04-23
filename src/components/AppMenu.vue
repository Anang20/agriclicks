<template>
    <v-navigation-drawer v-model="drawer" :clipped="true" fixed app>
      <v-list dense class="mt-3">
        <div class="wrap-drawer-toggle">
        </div>
        <h2 class="font-bold text-3xl text-center mb-2 text-blue-500">Agriclicks</h2>
        <template v-for="item in items">
          <v-list-item
            color="primary"
            link
            :to="item.routeUrl"
            :prepend-icon="item.icon"
            :title="item.text"
          >
          </v-list-item>
        </template>
      </v-list>
    </v-navigation-drawer>
</template>

<script>
export default {
  computed: {
    drawer() {
      return this.$store.state.drawer;
    },
  },
  data: () => ({
    isOpen: true,
    items: [
      {
        text: "Dashboard",
        routeUrl: "/",
        icon: "mdi-home",
      },
      {
        text: "Users",
        routeUrl: "/users",
        icon: "mdi-account-multiple",
      },
      {
        text: "Produksi",
        routeUrl: "/produksi",
        icon: "mdi-egg",
      },
    ],
  }),
};
</script>

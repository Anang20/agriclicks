<script lang="ts">
import { defineComponent } from "vue";
import AppMenu from "@/components/AppMenu.vue";
import AppHeader from "@/components/AppHeader.vue";

export default defineComponent({
    name: "DefaultLayout",
    components: {
        AppMenu,
        AppHeader,
    },
});
</script>

<template>
  <v-app dark class="drawer">
    <AppMenu/>
    <AppHeader/>
    <v-main class="m-6">
        <router-view></router-view>
    </v-main>
  </v-app>
</template>

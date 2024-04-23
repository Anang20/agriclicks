<template>
  <component :is="getLayoutComponent()">
    <router-view></router-view>
  </component>
</template>

<script>
export default {
  methods: {
    getLayoutComponent() {
      const layout = this.$route.meta?.layout || DefaultLayout;
      return layout;
    },
  },
};
</script>
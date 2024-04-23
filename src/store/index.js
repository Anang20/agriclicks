import { createStore } from "vuex";

export default createStore({
  state: {
    drawer: false,
  },
  mutations: {
    toggleDrawer(state) {
      state.drawer = !state.drawer;
    },
  },
  actions: {
    toggleDrawer(context) {
      context.commit("toggleDrawer");
    },
  },
});

import { createApp } from "vue";
import "./style.css";
import './index.css'
import App from "./App.vue";
import router from "./router";
import store from "./store";
import Swal from "sweetalert2";

// vuetify\
import "vuetify/styles";
import "vuetify/dist/vuetify.min.css";
import "@mdi/font/css/materialdesignicons.css";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";

const vuetify = createVuetify({
  components,
  directives,
});

window.Swal = Swal

createApp(App).use(router).use(store).use(vuetify).mount("#app");

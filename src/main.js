import { createApp } from "vue";
import App from "./App.vue";
import { Quasar } from "quasar";
import quasarUserOptions from "./quasar-user-options";
import GAuth from 'vue3-google-oauth2'

let gauthClientId = "770383407362-0e2coqiu3a22urvjfcon10r33atu4ile.apps.googleusercontent.com";


createApp(App)
  .use(Quasar, quasarUserOptions)
  .use(GAuth, { clientId: gauthClientId, scope: 'email', prompt: 'consent', fetch_basic_profile: true })
  .mount("#app");

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'
import axios from 'axios'

import "@/styles/app.scss"

loadFonts()

const app = createApp(App)
  .use(router)
  .use(vuetify);

app.config.globalProperties.axios = axios;
app.provide('axios', app.config.globalProperties.axios);
app.mount('#app');
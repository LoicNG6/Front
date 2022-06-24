import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'
// import Axios from 'axios'

import "@/styles/app.scss"

loadFonts()

createApp(App)
  .use(router)
  .use(vuetify)
  .mount('#app')

// app.config.globalProperties.$axios = Axios;
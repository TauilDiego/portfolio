import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import { Quasar } from 'quasar'
import quasarConfig from "@/plugins/quasarConfig"
import "quasar/dist/quasar.sass"
import '@quasar/extras/material-icons/material-icons.css'

createApp(App)
  .use(Quasar, quasarConfig)
  .use(router)
  .use(store)
  .mount('#app')


import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import { Quasar } from 'quasar'
import "quasar/dist/quasar.sass"
import '@quasar/extras/material-icons/material-icons.css'

createApp(App)
  .use(Quasar, {
    config: {
      brand: {
        primary: '#1976d2',
        secondary: '#26A69A',
        accent: '#9C27B0',

        dark: '#1d1d1d',
        'dark-page': '#121212',

        positive: '#21BA45',
        negative: '#C10015',
        info: '#31CCEC',
        warning: '#F2C037'
      }
    }
  })
  .use(router)
  .use(store)
  .mount('#app')


/**
 * main.js
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Plugins
import { registerPlugins } from '@/plugins'

// Components
import App from './App.vue'

// Composables
import { createApp } from 'vue'
import VueAxios from 'vue-axios'
import axios from 'axios'


const app = createApp(App)
app.use(VueAxios, axios)
axios.defaults.baseURL = "http://localhost:8080"

registerPlugins(app)
app.mount('#app')

import { createApp } from 'vue'
import App from './App.vue'

// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap'
import { router } from './router'

import '@fortawesome/fontawesome-free/css/all.css'
createApp(App).use(router).mount('#app')

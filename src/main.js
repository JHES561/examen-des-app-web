import { createApp } from 'vue'

import App from './App.vue'

import router from './router'

// Using Bootstrap and Bootstrap Icons via CDN in index.html

createApp(App)
.use(router)
.mount('#app')
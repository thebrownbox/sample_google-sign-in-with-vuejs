import { createApp } from 'vue'
import App from './App.vue'
import { initFirebaseApp } from "./firebase"

initFirebaseApp();

createApp(App).mount('#app')

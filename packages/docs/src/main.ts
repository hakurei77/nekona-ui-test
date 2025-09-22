import 'virtual:svg-icons-register';
import { createApp } from 'vue'
import App from './App.vue'
import "nekona-ui-test/dist/index.css"
import "@/assets/themes/global.scss"
import 'highlight.js/styles/tokyo-night-dark.css'
import router from '@/router';
import globalComponents from "./template/index"

createApp(App).use(router).use(globalComponents).mount('#app')

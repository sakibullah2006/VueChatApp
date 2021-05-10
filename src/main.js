import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import VueChatScroll from 'vue-chat-scroll'
import  './assets/main.css'

// import firebase auth service
import { projectAuth } from './firebase/config'

let app

projectAuth.onAuthStateChanged( () => {
    if (!app) {
        app = createApp(App)
        .use(router)
        .use(VueChatScroll)
        .mount('#app')
    }
})

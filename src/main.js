import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router/router.js'

/* global components */
import MyGlobalComponent1 from './components/globalComponents/MyGlobalComponent1.vue'

const app = createApp(App)

const globalComponents = {
    MyGlobalComponent1,
}

/* registering all the global components */
Object.entries(globalComponents).forEach(([componentName, component]) => {
    app.component(componentName, component)
})

app.use(router)
    .mount('#app')

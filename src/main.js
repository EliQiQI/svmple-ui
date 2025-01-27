// import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import VxeUI from 'vxe-pc-ui'
import 'vxe-pc-ui/lib/style.css'
// ...

import VxeTable from 'vxe-table'
import 'vxe-table/lib/style.css'
// ...

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(VxeUI)
app.use(VxeTable)

app.mount('#app')

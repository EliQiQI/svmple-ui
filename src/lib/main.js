import SpButton from "../components/SpButton.vue";
import VxeUI from 'vxe-pc-ui'
import 'vxe-pc-ui/lib/style.css'
// ...

import VxeTable from 'vxe-table'
import 'vxe-table/lib/style.css'

const initVxeUI = app =>{
    app.use(VxeUI).use(VxeTable)
}
export {SpButton,initVxeUI}
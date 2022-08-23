import { createApp } from 'vue'
import App from './App.vue'
import { ElButton, ElAside, ElHeader, ElMenu, ElMain, ElFooter, ElContainer, ElIcon, ElSwitch, ElAvatar, ElBadge, ElDropdown, ElDropdownItem, ElDropdownMenu, ElRadio, ElRadioGroup, ElOption, ElSelect, ElInput,ElTable,ElTableColumn ,ElCard,ElCol,ElRow,ElFormItem,ElForm,ElUpload,ElTransfer} from 'element-plus'
import 'element-plus/dist/index.css'
import router from './router'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import store from './store'
import './util/mock.js'
const app = createApp(App)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}

app.use(router)
app.use(store)
app.use(ElButton).use(ElAside).use(ElHeader).use(ElMenu).use(ElMain).use(ElFooter).use(ElContainer).use(ElIcon).use(ElSwitch).use(ElAvatar).use(ElBadge).use(ElDropdown).use(ElDropdownItem).use(ElDropdownMenu).use(ElRadio).use(ElRadioGroup).use(ElOption).use(ElSelect).use(ElInput).use(ElTable).use(ElTableColumn).use(ElCard).use(ElCol).use(ElRow).use(ElFormItem).use(ElForm).use(ElUpload).use(ElTransfer)
app.mount('#app')
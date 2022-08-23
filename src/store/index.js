import { createStore } from 'vuex'
import uInfo from './state/userinfo.state'
import menu from './menu'
import items from './items'


export default createStore({
    state: {
        num: 1
    },
    modules: {
        menu,
        uInfo,
        items
    }
})


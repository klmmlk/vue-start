import commit from 'vuex'
export default {
    // namespace: true,
    state: {
        itemData: null
    },
    getters: {
        getItems(state) {
            // console.log(state.itemData);
            return state.itemData
        },
    },
    mutations: {
        pushMenuData(state,data){
            // console.log(data);
        },
        setItems(state,data){
            state.itemData = data
            // console.log(state.itemData);
        },
        addItems(state){
            state.itemData.push({asdf:'112212'})
            console.log(state.itemData);
        }
    },
    actions:{
        setItems({commit},data) {
            // console.log(state);
            // console.log(data);
            // state.itemData = data
            // console.log(data.itemsData);
            commit('pushMenuData', data.itemsData)
            commit('setItems', data.itemsData)

            // commit('pushMenuData', data, { root: true })
            // getters.
            // commit('menu/collapseMenu')

        }
    }
}
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
        setItems(state,data){
            state.itemData = data
            // console.log(state.itemData);
        },
        addItems(state){
            state.itemData.push({asdf:'112212'})
            // console.log(state.itemData);
        }
    },
    actions:{
        setItems({commit},data) {
            // 判断项目是否为活动状态，并推送给菜单管理。
            const list =[]
            for (let i in data.itemsData) {
                if (data.itemsData[i].activate){
                    list.push({
                        itemName:data.itemsData[i].itemName
                    })
                }
                // console.log(data.itemsData[i]);
                
            }
            commit('setChildMenu', list,{ root: true })
            
            
            // console.log(data.itemsData);
            commit('setItems', data.itemsData)
            // commit('setItems', list)

        }
    }
}
export default {
    state: {
        itemData: null
    },
    mutations: {
        getItems(state){
            return state.itemData
        },
        setItems(state,data){
            // console.log(data);
            state.itemData=data
        }
    }
}
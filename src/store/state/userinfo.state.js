export default {
    state: {
        userInfo: (JSON.parse(localStorage.getItem('loginData'))) || {}
    },
    mutations: {
        setUserInfo(state, uInfo) {
            state.userInfo = uInfo
        },
        logout(state){
            state.userInfo=''
        }
    }
}
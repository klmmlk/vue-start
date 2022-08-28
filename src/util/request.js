import { post, get } from './service'

export const loginApi = data => {
    return post({
        url: '/login',
        data
    })
}
export const itemsApi = () => {
    return get({
        url: '/items',
        // data
    })
}
export const itemsChange = data=>{
    return post({
        url:'/itemschange',
        data
    })
}
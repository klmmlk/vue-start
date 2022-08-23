import Mock from 'mockjs'
import loginApi from './mockServerData/login'
import itemsApi from './mockServerData/items'

Mock.mock('/api/login', loginApi.getLoginRes)

Mock.mock('/api/items', itemsApi.getItemsData)
Mock.mock('/api/itemslist', itemsApi.getItemsList)

Mock.setup({
    timeout: 1000
})
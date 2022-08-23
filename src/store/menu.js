export default {
    state: {
        isCollapse: false,
        menu: [
            {
                path: "/",
                name: "home",
                lable: "首页",
                icon: "House",
                url: "Home/Home",
            },
            {
                path: "/goodsadmin",
                name: "goodsadmin",
                lable: "项目管理",
                icon: "Goods",
                url: "MallManage/MallManage",
            },
            {
                path: "/User",
                name: "user",
                lable: "用户管理",
                icon: "user",
                url: "UserManage/UserManage",
            },
            {
                lable: "项目",
                icon: "location",
                children: [],
            },
        ]
    },
    mutations: {
        collapseMenu(state) {
            state.isCollapse = !state.isCollapse
        },
        setChildMenu(state, data) {
            data = data.itemsData
            const childMenu = state.menu.filter((item) => item.children)[0]
            for (const key in data) {
                childMenu.children.push(
                    {
                        path: "/good/" + data[key].itemName,
                        name: "good" + key,
                        lable: data[key].itemName,
                        url: "Other/Page" + key,
                    }
                )
            }
        }
    }
}
import Mock from 'mockjs'

const Random = Mock.Random
const usersData = {
    'admin': {
        name: '张三',
        password: 'admin',
        accessLevel: 1,
        lastLoginDate:Random.date()
    },
    'lisi': {
        name: '李四',
        password: 123456,
        accessLevel: 2,
        lastLoginDate:Random.date()
    },
    'wangwu': {
        name: '王五',
        password: 123456,
        accessLevel: 3,
        lastLoginDate:Random.date()
    },
}
export default {
    getLoginRes: (userLogindata) => {
        userLogindata = JSON.parse(userLogindata.body)
        // console.log(Object.keys(usersData))
        if (userLogindata.username in usersData && userLogindata.passwd == usersData[userLogindata.username].password) {
            let activeUser = usersData[userLogindata.username]
            return {
                code: 20000,
                data: {
                    username: activeUser.name,
                    userAcess: activeUser.accessLevel,
                    lastLoginDate:activeUser.lastLoginDate
                }
            }
        } else {
            return {
                code: 20100,
                error: '用户名或密码错误'
            }
        }
        /* for (let i = 0; i < 7; i++) {
            List.push(
                Mock.mock({
                    苹果: Mock.Random.float(100, 8000, 0, 0),
                    小米: Mock.Random.float(100, 8000, 0, 0),
                    vivo: Mock.Random.float(100, 8000, 0, 0),
                    三星: Mock.Random.float(100, 8000, 0, 0),
                })
            )

        }
 */

    }
}

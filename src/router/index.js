import {
	createRouter,
	createWebHashHistory
} from 'vue-router'
import store from '../store'
// import {c}
// 2. 定义一些路由
// 每个路由都需要映射到一个组件。
const routes = [
	{
		path: '/login',
		name: 'login',
		component: () => import('../views/pages/login.vue')
	},
	{
		path: '/',
		name: 'Main',
		redirect: '/home',
		component: () => import('../views/Main.vue'),
		/* beforeEnter: (to, from, next) => {
			if (111 != 111) {
				console.log('nonono');
				next()
			}
		}, */
		children: [
			{
				path: '/home',
				name: 'home',
				component: () => import('../views/home/index.vue')
			},
			{
				path: '/user',
				name: 'user',
				component: () => import('../views/User/index.vue')
			},
			{
				path: '/goodsadmin',
				name: 'goodsadmin',
				component: () => import('../views/goodAdmin/index.vue')
			},
			{
				path: '/good/:id',
				component: () => import('../views/goods.vue')
			},
			{
				path: '/:pathMatch(.*)',
				component: () => import('../views/NotFound.vue')
			}
		]
	}]

// 3. 创建路由实例并传递 `routes` 配置
// 你可以在这里输入更多的配置，但我们在这里
// 暂时保持简单
const router = createRouter({
	// 4. 内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。
	history: createWebHashHistory(),
	routes, // `routes: routes` 的缩写
})
router.beforeEach((to, from, next) => {
	if (!store.state.uInfo.userInfo.username) {
		if (to.path === '/login') {
			next()
			return
		}
		next('/login')
	} else {
		if (to.path === '/login') {
			next('/home')
		} else {
			next()
		}

	}
})


export default router

import { createRouter, createWebHistory } from 'vue-router'
import NProgress from 'nprogress'

NProgress.configure({ showSpinner: false })
// Pages
const Home = () => import('@/pages/Home.vue')
const About = () => import('@/pages/About.vue')

const routes = [
    { path: '/', component: Home },
    { path: '/about', component: About }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) return savedPosition
        else return { top: 0 }
    },
    linkActiveClass:
        'relative text-indigo-600 after:absolute after:border-b-2 after:border-indigo-600 after:inset-x-0 after:bottom-0'
})

router.beforeEach((to, from, next) => {
    if (to.name) {
        // Start the route progress bar.
        NProgress.start()
    }
    next()
})

router.afterEach(() => {
    // Complete the animation of the route progress bar.
    NProgress.done()
})

export default router

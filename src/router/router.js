import { createRouter, createWebHistory } from 'vue-router'
import Main from '@/pages/Main.vue'
import Posts from '@/pages/Posts.vue'

const routes = [
    {
        path: '/',
        component: Main,
    },
    {
        path: '/Posts',
        component: Posts,
    }
]

const router = createRouter({
    routes,
    history: createWebHistory(process.env.BASE_URL)
})

export default router;
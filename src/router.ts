import { create } from 'ts-node'
import { createRouter, createWebHashHistory, createWebHistory, RouteRecordRaw } from 'vue-router'
import MainBoard from  './pages/MainBoard.vue'
import About from './pages/About.vue'
import Blog from './pages/Blog.vue'
import Main from './pages/Main.vue'

const routes: RouteRecordRaw[] = [
    {
        path: '/',
        component: Main,
        children: [
            {
                path: 'mainboard',
                component: MainBoard
            },
            {
                path: 'about',
                component: About
            },
            {
                path: 'blog/:blogid*',
                component: Blog
            },
            
        ],
        redirect: {
            path: '/mainboard'
        }
    },
]

const router = createRouter({
    routes: routes,
    history: createWebHashHistory()
})


export default router;
import { create } from 'ts-node'
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
    {
        path: '/',
        component: import('./pages/Main.vue'),
        children: [
            {
                path: 'about',
                component: import('./pages/About.vue')
            },
            {
                path: 'blog/:blogid*',
                component: import('./pages/Blog.vue')
            },
            {
                path: 'editor',
                component: import('./pages/Editor.vue')
            }
        ]
    },
]

const router = createRouter({
    routes: routes,
    history: createWebHistory()
})

export default router;
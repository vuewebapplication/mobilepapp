import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
const routes = [{
        path: '/',
        component: () =>
            import ('@/views/Login.vue'),

    },
    {
        path: '/login',
        component: () =>
            import ('@/views/Login.vue'),

    },

    {
        path: '/home',
        name: 'home',
        component: () =>
            import ('@/views/Home.vue'),
    },

    {
        path: '/members',
        name: 'members',
        component: () =>
            import ('@/views/Members.vue'),
    },

    {
        path: '/tasks',
        name: 'tasks',
        component: () =>
            import ('@/views/Tasks.vue'),
    },

    {
        path: '/records',
        name: 'records',
        component: () =>
            import ('@/views/Records.vue'),
    },

    {
        path: '/profile',

        name: 'profile',
        component: () =>
            import ('@/views/Profile.vue'),
    },
]
const router = new VueRouter({
    mode: 'history',
    routes,
})
export default router
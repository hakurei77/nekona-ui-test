//对外暴露配置路由（常量路由）
export const constantRoute = [
    {
        path:'/',
        component:() => import('@/page/index.vue'),
    },
    {
        path:'/icon',
        component:() => import('@/page/icon.vue'),
    },
    {
        path: '/docs',
        component: () => import('@/page/docs.vue'),
    }
];
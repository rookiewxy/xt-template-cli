/*
 * @Description: 路由
 * @Autor: wxy
 * @Date: 2021-04-22 09:29:51
 * @LastEditors: ljw
 * @LastEditTime: 2021-08-10 11:06:47
 */
import React from 'react'

const testRoutes = [
    {
        name: 'foo',
        path: '/foo',
        meta: {
            label: '',
            key:''
        },
        component: React.lazy(() => import("../pages/foo"))
    }
]


const routes = [
    ...testRoutes
]

export {
    routes
}
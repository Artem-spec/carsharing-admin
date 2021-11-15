import { lazy } from 'react';

const routes = [
    {
        path: 'panel',
        component: lazy(() => import('../AdminPanel/AdminPanel')),
        exact: true,
    },
];

export default routes;

import { FC } from 'react';
import Home from '../pages/Home';

export interface IRoute {
    path: string;
    component: FC;
}

const routes: IRoute[] = [
    {
        path: '/',
        component: Home,
    },
];
export default routes;

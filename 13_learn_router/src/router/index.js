import About, { contact, culture, History } from '../pages/about';
import detail3 from '../pages/detail3';
import Home from '../pages/home';
import login from '../pages/login';
import User from '../pages/user';

const routes = [
  {
    path: '/',
    exact: true,
    component: Home,
  },
  {
    path: '/about',
    component: About,
    routes: [
      {
        path: '/about',
        exact: true,
        component: History,
      },
      { 
        path: '/about/culture',
        component: culture,
      },
      {
        path: '/about/contact',
        component: contact,
      },
    ],
  },
  {
    path: '/user',
    component: User,
  },
  {
    path: '/login',
    component: login,
  },
  {
    path:'/detail3',
    component:detail3
  }
];
export default routes;

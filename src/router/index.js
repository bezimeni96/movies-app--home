import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import AppMovies from '../views/AppMovies.vue';
import AddMovie from '../views/AddMovie';
import AppLogin from '../views/AppLogin';
import AppRegister from '../views/AppRegister';
import { store } from '../store/movieStore';

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
    redirect: '/movies'
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
    meta: { isAuthRequired: true}
  },
  {
    path: '/movies',
    name: 'movies',
    component: AppMovies,
    meta: { isAuthRequired: true}
  },
  {
    path: '/add',
    name: 'add',
    component: AddMovie,
    meta: { isAuthRequired: true}
  },
  {
    path: '/login',
    name: 'login',
    component: AppLogin
  },
  {
    path: '/register',
    name: 'register',
    component: AppRegister
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

router.beforeEach((to, from, next) => {
  if (!to.meta.isAuthRequired  && !localStorage.getItem('token')) {
    next();
  } else {
    if (!store.getToken && localStorage.getItem('token')) {
      store.commit('setToken', localStorage.getItem('token'));
      next();
    } else  {
      if (!localStorage.getItem('token')) {
        next('/login');
      }
      next();
    } 
  }
})

export default router

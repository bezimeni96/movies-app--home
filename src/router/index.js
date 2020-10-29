import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import AppMovies from '../views/AppMovies.vue';
import AddMovie from '../views/AddMovie';
import AppLogin from '../views/AppLogin';

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
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/movies',
    name: 'movies',
    component: AppMovies
  },
  {
    path: '/add',
    name: 'add',
    component: AddMovie
  },
  {
    path: '/login',
    name: 'login',
    component: AppLogin
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

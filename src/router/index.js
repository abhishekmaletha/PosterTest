import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/Feed',
    name: 'Feed',
    component: () => import(/* webpackChunkName: "about" */ '../views/Feed.vue')
  },
  {
    path: '/Feed/:id',
    name: 'Post',
    component: () => import('../views/Post.vue'),
    props: true
  },
  {
    path: '/Users',
    name: 'Users',
    component: () => import('../views/Users.vue'),
    props: true
  },
  {
    path: '/Users/:id',
    name: 'Albums',
    component: () => import('../views/Albums.vue'),
    props: true
  },
  {
    path: '/Users/:id/:AId',
    name: 'Photos',
    component: () => import('../views/Photos.vue'),
    props: true
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

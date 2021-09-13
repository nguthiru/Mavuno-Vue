import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Produce from '../components/Home/produce.vue';
import Farm_Items from '../components/Home/farm_items.vue';

const routes = [
  {
    path: '/home',
    name: 'home',
    component: Home,
    children: [
      {
        path:'produce',
        component: Produce,
        name:'produce'
      
      },
      {
        path:'items',
        component: Farm_Items,
        name:'farm_items'
      }

    ]
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Auth from '../views/Auth.vue'
import Login from '../components/Auth/login.vue'
import Bids from '../views/Bids.vue';
import Produce from '../components/Home/produce.vue';
import Farm_Items from '../components/Home/farm_items.vue';

const routes = [
  {
    path:'',
    redirect:'/home'
  },
  {
    
    path: '/home',
    name: 'home',
    component: Home,
    children: [
      {
        path:'',
        redirect:'/home/produce'
      },
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
    path: '/auth',
    name: 'auth',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Auth,
    children: [
      {
        path:'login',
        name: 'login',
        component: Login
        
      }
    ]
  },
  {
    path: '/bids',
    name: 'bids',
    component: Bids
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

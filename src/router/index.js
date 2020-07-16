import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import DesiParca from '../views/forms/DesiParca.vue'
import Dikis from '../views/forms/Dikis.vue'
import EkliKece from '../views/forms/EkliKece.vue'
import Signup from '../views/Signup.vue'
import Haritalama from '../views/forms/Haritalama.vue'
import HookandLoop from '../views/forms/HookandLoop.vue'
import IskartaTakip from '../views/forms/IskartaTakip.vue'

Vue.use(Router)

const router = new Router ({ 
    mode: 'history',  
    routes : [
    {
      path: '/',
      name: 'Home',
      component: Home,
      // meta:{ requiresAuth: true }
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/signup',
      name: 'Signup',
      component: Signup
    },
    {
      path: '/desiparca',
      name: 'DesiParca',
      component: DesiParca,
      // meta:{ requiresAuth: true }
    },
    {
      path: '/dikis',
      name: 'Dikis',
      component: Dikis,
      // meta:{ requiresAuth: true }
    },
    {
      path: '/eklikece',
      name: 'EkliKece',
      component: EkliKece,
      // meta:{ requiresAuth: true }
    },
    {
      path: '/haritalama',
      name: 'Haritalama',
      component: Haritalama
    },
    {
      path: '/hookandLoop',
      name: 'HookandLoop',
      component: HookandLoop
    },
    {
      path: '/iskartatakip',
      name: 'IskartaTakip',
      component: IskartaTakip
    }
  ]
})

// router.beforeEach((to, from, next) => {
//   const loggedIn = localStorage.getItem('jwt')
//   if(to.matched.some(record => record.meta.requiresAuth) && !loggedIn){
//     next('/login');
//   }
//   else{
//     next();
//   }
// })
export default router

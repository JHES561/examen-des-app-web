import { createRouter, createWebHistory } from 'vue-router'

import LoginView from '../views/LoginView.vue'
import DashboardView from '../views/DashboardView.vue'
import ProductView from '../views/ProductView.vue'
import ContactView from '../views/ContactView.vue'
import UserView from '../views/UserView.vue'

const routes = [

  {
    path: '/',
    redirect: '/login'
  },

  {
    path: '/login',
    component: LoginView
  },

  {
    path: '/dashboard',
    component: DashboardView,
    meta: {
      requiresAuth: true
    },

    children: [

      {
        path: 'productos',
        component: ProductView
      },

      {
        path: 'usuarios',
        component: UserView
      },

      {
        path: 'contacto',
        component: ContactView
      }

    ]
  }

]

const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach((to, from) => {
  const token = localStorage.getItem('token')

  if (to.meta.requiresAuth && !token) {
    return { path: '/login' }
  }

  // returning undefined allows navigation
})

export default router
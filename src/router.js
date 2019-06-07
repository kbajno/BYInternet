import firebase from 'firebase'
import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/views/Home'
import Board from '@/views/Board'
import Login from '@/views/Login'
import SignUp from '@/views/SignUp'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/sign-up',
      name: 'SignUp',
      component: SignUp
    },
    {
      path: '/board',
      name: 'Board',
      component: Board,
      meta: {
        requiresAuth: true
      }
    }
  ]
})

router.beforeEach((to, from, next) => {
  const currentUser = firebase.auth().currentUser
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth)

  if (requiresAuth && !currentUser) next('login')
  else if (currentUser && to.path === '/login') next(from.path)
  else if (currentUser && to.path === '/sign-up') next(from.path)
  else next()
  console.log('requiresAuth: ' + requiresAuth)
  console.log('currentUser: ' + currentUser)
  console.log(from)
})

export default router

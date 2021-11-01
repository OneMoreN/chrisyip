import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import ContactMe from '../views/ContactMe.vue'
import SubmissionFail from '../views/SubmissionFail.vue'
import PathNotFound from '../views/PathNotFound.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/contact-me',
    name: 'Contact Me',
    component: ContactMe
  },
  {
    path: '/404',
    name: 'fail',
    component: SubmissionFail
  },
  {
    path: '/:pathMatch(.*)*',
    component: PathNotFound
  }
]

const router = createRouter({
  mode: 'history',
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    }

    if (to.hash) {
      return window.scrollTo({
        top: document.querySelector(to.hash).offsetTop + 60,
        behavior: 'smooth'
      })
    }

    return window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

})

export default router

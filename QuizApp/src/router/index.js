import { createRouter, createWebHistory } from 'vue-router';

import Home from '../views/Home.vue';
import Quiz from '../views/Quiz.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'quizzes',
      component: Home,
    },
    {
      path: '/home',
      redirect: '/',
    },
    {
      path: '/quiz/:id',
      name: 'quiz',
      component: Quiz,
    },
    // {
    //   path: '/:catchAll(.*)*',
    //   name: '404',
    //   component: NotFoundView,
    // },
  ],
});

export default router;

import { createRouter, createWebHistory } from 'vue-router'
import StartQuestionnaireView from '../views/StartQuestionnaireView.vue'
import FinishView from '../views/FinishView.vue'
import LoadingView from '../views/LoadingView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: 'start-questionnaire'
    },
    {
      path: '/start-questionnaire',
      name: 'start-questionnaire',
      component: StartQuestionnaireView,
    },
    {
      path: '/answer_questionnaire',
      name: 'answer_questionnaire',
      component: LoadingView,
    },
    {
      path: '/finish',
      name: 'finish',
      component: FinishView
    }
  ]
})

export default router

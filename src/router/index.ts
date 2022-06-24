import { createRouter, createWebHistory } from 'vue-router'
import StartQuestionnaireView from '../views/StartQuestionnaireView.vue'
import FinishView from '../views/FinishView.vue'
import QuestionnaireView from '../views/QuestionnaireView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: 'answer_questionnaire'
    },
    {
      path: '/answer_questionnaire',
      name: 'answer_questionnaire',
      component: StartQuestionnaireView,
    },
    {
      path: '/questionnaire',
      name: 'questionnaire',
      component: QuestionnaireView,
    },
    {
      path: '/finish',
      name: 'finish',
      component: FinishView
    }
  ]
})

export default router

import type { GetterTree } from 'vuex'
import type { IRootState } from '../types'
import type { IQuestionnaireGetters, IQuestionnaireState } from './types'

export const QuestionnaireGetters: GetterTree<IQuestionnaireState, IRootState> & IQuestionnaireGetters = {
    questionnaire: (state: IQuestionnaireState) => {
        return state.currentQuestionnaire
    },
    isQLoading: (state: IQuestionnaireState) => {
        return state.isQLoading
    },
    isSubmitting: (state: IQuestionnaireState) => {
        return state.isSubmitting
    },
    currentQuestion: (state: IQuestionnaireState) => {
        return state.currentQuestion
    },
    nextQuestion: (state: IQuestionnaireState) => {
        return state.nextQuestion
    }
}

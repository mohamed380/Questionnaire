import type { GetterTree } from 'vuex'
import type { IRootState } from '../types'
import type { IQuestionnaireGetters, IQuestionnaireState } from './types'

export const QuestionnaireGetters: GetterTree<IQuestionnaireState, IRootState> & IQuestionnaireGetters = {
    questionnaire: (state: IQuestionnaireState) => {
        return state.quesionnaire
    },
    isInitializing: (state: IQuestionnaireState) => {
        return state.isInitializing
    },
}

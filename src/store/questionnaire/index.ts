import { questionnaireActions } from "./actions";
import { QuestionnaireGetters } from "./getter";
import { questionnaireMutations } from "./mutation";
import { questionnaireState } from "./state";


export const questionnaireModule = {
    state: questionnaireState,
    getters: QuestionnaireGetters,
    actions: questionnaireActions,
    mutations: questionnaireMutations
}
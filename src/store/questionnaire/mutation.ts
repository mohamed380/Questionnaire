import type questionnaire from "@/models/questionnaire";
import type { MutationTree } from "vuex";
import type { IQuestionnaireState } from "./types";


export const questionnaireMutations: MutationTree<IQuestionnaireState> = {

    SET_QUESTIONNAIRE(state: IQuestionnaireState, questionnaire: questionnaire) {
        state.quesionnaire = questionnaire
    },

    TOGGLE_INITIALIZING(state: IQuestionnaireState) {
        state.isInitializing = !state.isInitializing
    }
}
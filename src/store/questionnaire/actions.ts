import questionnaire from "@/models/questionnaire";
import { questionnaireService } from "@/services/questionnaireService";
import type { ActionContext, ActionTree } from "vuex";
import type { IRootState } from "../types";
import type { IQuestionnaireState } from "./types";


export const questionnaireActions: ActionTree<IQuestionnaireState, IRootState> = {
    // @ts-ignore
    async intializeQuestionnaire({ commit, state }: ActionContext) {

        if (!state.questionnaire?.questionnaire_id) {
            commit('TOGGLE_INITIALIZING');
            await questionnaireService.intializeQuestionnaire(state.currentUser).then((questionnaireData) => {
                let questionnaireVar = new questionnaire(questionnaireData)
                commit('SET_QUESTIONNAIRE', questionnaireVar);
            }).catch((res) => {
                alert(res.message)
            });
            commit('TOGGLE_INITIALIZING');
        }
    }

}
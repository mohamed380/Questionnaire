import type questionnaire from "@/models/questionnaire";
import type question from "@/models/question";
import type { MutationTree } from "vuex";
import type { IQuestionnaireState } from "./types";
import type answer from "@/models/answer";


export const questionnaireMutations: MutationTree<IQuestionnaireState> = {

    SET_QUESTIONNAIRE(state: IQuestionnaireState, questionnaire: questionnaire) {
        state.currentQuestionnaire = questionnaire
    },

    TOGGLE_QLOADING(state: IQuestionnaireState) {
        state.isQLoading = !state.isQLoading
    },

    TOGGLE_SUBMITTING(state: IQuestionnaireState) {
        state.isSubmitting = !state.isSubmitting
    },

    ADD_QUESTION(state: IQuestionnaireState, question: question) {
        if (state.currentQuestionnaire?.questions) {
            state.currentQuestionnaire?.questions.push(question);
        } else {
            //@ts-ignore
            state.currentQuestionnaire.questions = [question];
        }
    },

    SET_CURRENT_QUESTION(state: IQuestionnaireState, question: question) {
        state.currentQuestion = question;
    },

    ANSWER_QUESTION(state: IQuestionnaireState, answer: any) {
        state.currentQuestion?.setUserAnswer(answer);
    },

    QFINISHD(state: IQuestionnaireState, answer: any) {
        if (state.currentQuestion) {
            //@ts-ignore
            state.currentQuestionnaire.finished = true
            state.isQLoading = false
            state.isSubmitting = false
        }
    },

    SET_NEXT_QUESTION(state: IQuestionnaireState, question: question) {
        //@ts-ignore
        state.nextQuestion = question
    }
}
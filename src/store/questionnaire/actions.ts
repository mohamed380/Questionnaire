import questionnaire from "@/models/questionnaire";
import question from "@/models/question";
import { questionnaireService } from "@/services/questionnaireService";
import type { ActionContext, ActionTree } from "vuex";
import type { IRootState } from "../types";
import type { IQuestionnaireState } from "./types";
import dummyQuestion from "@/store/questionnaire/dummyQuestion";
import dummyQuestionnaire from "@/store/questionnaire/dummyQuestionnaire";


export const questionnaireActions: ActionTree<IQuestionnaireState, IRootState> = {
    // @ts-ignore
    async initializeQuestionnaire({ commit, state, getters }: ActionContext) {

        if (!state.questionnaire?.questionnaire_id) {
            commit('TOGGLE_QLOADING');
            let questionnaireVar: questionnaire;
            await questionnaireService.initializeQuestionnaire(getters.currentUser).then((questionnaireData) => {
                questionnaireVar = new questionnaire(questionnaireData.data)
            }).catch((res) => {
                // alert(`${res.message}, using dummy data`)
                questionnaireVar = new questionnaire(dummyQuestionnaire)
                //@ts-ignore
            }).finally(() => {
                commit('SET_QUESTIONNAIRE', questionnaireVar);
                commit('TOGGLE_QLOADING');
            })
        }
    },

    // @ts-ignore
    async getFirstQuestion({ commit, state, getters }: ActionContext) {

        if (state.currentQuestionnaire?.questionnaire_id) {
            commit('TOGGLE_QLOADING');
            let questionVar: question;
            await questionnaireService.getFirstQuestion(getters.currentUser, state.currentQuestionnaire).then((questionData) => {
                questionVar = new question(questionData.data)
            }).catch((res) => {
                // alert(`${res.message}, using dummy data`)
                // @ts-ignore
                questionVar = new question(dummyQuestion[0])
                //@ts-ignore
            }).finally(() => {
                commit('SET_CURRENT_QUESTION', questionVar);
                commit('TOGGLE_QLOADING');
            })
        }

    },
    // @ts-ignore
    previousQuestion({ commit, state }: ActionContext) {

        if (state.currentQuestion?.index_number > 1) {
            commit('TOGGLE_QLOADING');
            let questionVar = questionnaireService.previousQuestion(state.currentQuestion, state.currentQuestionnaire)
            commit('SET_CURRENT_QUESTION', questionVar)
            commit('TOGGLE_QLOADING');
        }
    },
    // @ts-ignore
    async submitAnswer({ commit, state, getters }: ActionContext) {

        if (state.currentQuestion.canSubmit() && state.currentQuestionnaire) {
            commit('TOGGLE_SUBMITTING');
            let response: any;
            let questionsLength = (state.currentQuestionnaire.questions?.length ?? 0) + 1;
            await questionnaireService.submitAnswer(getters.currentUser, state.currentQuestion, state.currentQuestionnaire).then((questionData) => {
                //@ts-ignore
                response = questionData.data
            }).catch((res) => {

                // alert(`${res.message}, using dummy data`)
                response = dummyQuestion[questionsLength]

                //@ts-ignore
            }).finally(() => {
                // current question is the last one
                if (questionsLength == state.currentQuestion.number_of_questions) {

                    if (state.currentQuestion?.hasPostAnswer()) {
                        state.currentQuestion.postAnswerFlag = true
                        commit('TOGGLE_SUBMITTING');
                        return
                    }
                    commit('QFINISHD');
                    commit('TOGGLE_SUBMITTING');
                    return
                }

                let questionVar = new question(response);

                // if the submitted answer is wrong or has validation error, don't update the store
                if (questionVar.question_id == state.currentQuestion.question_id) {
                    questionVar.localAnswer = state.currentQuestion.localAnswer;
                    commit('SET_CURRENT_QUESTION', questionVar);
                    commit('SET_NEXT_QUESTION', null);
                    commit('TOGGLE_SUBMITTING');
                    return;
                }

                if (state.currentQuestion.hasPostAnswer()) {
                    commit('SET_NEXT_QUESTION', questionVar);
                    state.currentQuestion.postAnswerFlag = true
                } else {
                    commit('ADD_QUESTION', state.currentQuestion);
                    commit('SET_CURRENT_QUESTION', questionVar);
                }

                commit('TOGGLE_SUBMITTING');
            })
        } else {
            alert('The question\'s answer is not valid ')
        }
    },
    //@ts-ignore
    showCurrenctQuestion({ commit, state }: ActionContext) {
        if (state.currentQuestion) {
            state.currentQuestion.postAnswerFlag = false
            commit('SET_NEXT_QUESTION', null);
        }
    },
    //@ts-ignore
    showNextQuestion({ commit, state, getters }: ActionContext) {
        if (state.currentQuestion) {
            state.currentQuestion.postAnswerFlag = false
            commit('ADD_QUESTION', state.currentQuestion);

            if (state.nextQuestion) {
                commit('SET_CURRENT_QUESTION', state.nextQuestion);
                commit('SET_NEXT_QUESTION', null);
                return;
            }
            commit('QFINISHD');
        }
    }

}
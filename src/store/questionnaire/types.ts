import type questionnaire from "@/models/questionnaire";
import type question from "@/models/question";

export interface IQuestionnaireState {
    currentQuestionnaire?: questionnaire,
    currentQuestion?: question,
    nextQuestion?: question,
    isQLoading: boolean,
    isSubmitting: boolean
}

export interface IQuestionnaireGetters {
    questionnaire(state: IQuestionnaireState): questionnaire | undefined,
    currentQuestion(state: IQuestionnaireState): question | undefined,
    nextQuestion(state: IQuestionnaireState): question | undefined,
    isQLoading(state: IQuestionnaireState): boolean
    isSubmitting(state: IQuestionnaireState): boolean
}
import type questionnaire from "@/models/questionnaire";

export interface IQuestionnaireState{
    quesionnaire?: questionnaire
    isInitializing: boolean
}

export interface IQuestionnaireGetters{
    questionnaire(state: IQuestionnaireState): questionnaire|undefined,
    isInitializing(state: IQuestionnaireState): boolean
}
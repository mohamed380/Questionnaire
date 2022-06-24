import type IQuestionnaireResponse from "@/interfaces/responses/IQuestionnaireResponse";
import type question from '@/models/question'
export default class questionnaire {
    user_test_group_id: number
    tens_questionnaire_id?: number
    questionnaire_id: number
    candidate_id?: string
    finished?: boolean
    questions? :question[]

    constructor(object: IQuestionnaireResponse) {
        this.user_test_group_id = object.user_test_group_id;
        this.tens_questionnaire_id = object.tens_questionnaire_id;
        this.questionnaire_id = object.questionnaire_id;
        this.candidate_id = object.candidate_id;
        this.finished = object.finished;
    }
}
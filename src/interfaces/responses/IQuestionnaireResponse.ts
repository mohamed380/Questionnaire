export default interface IQuestionnaireResponse {
    user_test_group_id: number
    tens_questionnaire_id?: number
    questionnaire_id: number
    candidate_id?: string
    finished?: boolean
}
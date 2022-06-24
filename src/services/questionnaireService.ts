import apis from "@/api"
import axios from "@/axios";
import type IQuestionnaireResponse from "@/interfaces/responses/IQuestionnaireResponse";
import type IQuestionResponse from "@/interfaces/responses/IQuestionResponse";
import type questionnaire from "@/models/questionnaire";
import type question from "@/models/question";
import type user from "@/models/user";

export class questionnaireService {


    static async initializeQuestionnaire(currentUser: user) {
        return await axios.get(apis.INITIALIZE_QUESTIONNAIRE, { params: { bearer_token: currentUser.access_token, test_group_id: import.meta.env.VITE_TEST_GROUP_ID } })
    }


    static async getFirstQuestion(currentUser: user, questionnaire: questionnaire) {
        return await axios.get(apis.FIRST_QUESTION, {
            params: {
                bearer_token: currentUser.access_token,
                questionnaire_id: questionnaire.questionnaire_id,
                user_test_group_id: questionnaire.user_test_group_id
            }
        })
    }

    static async submitAnswer(currentUser: user, currentQuestion: question, questionnaire: questionnaire) {
        return await axios.post(apis.SUBMIT_ANSWER, {
            bearer_token: currentUser.access_token,
            questionnaire_id: questionnaire.questionnaire_id,
            user_test_group_id: questionnaire.user_test_group_id,
            ...currentQuestion.getUserAnswer()
        })
    }

    static previousQuestion(currentQuestion: question, questionnaire: questionnaire): question | undefined {
        let previousQuestion = questionnaire.questions?.[currentQuestion.index_number - 2];
        questionnaire.questions?.pop();
        return previousQuestion;
    }
}
import apis from "@/api"
import axios from "@/axios";
import type IQuestionnaireResponse from "@/interfaces/responses/IQuestionnaireResponse";
import type user from "@/models/user";

export class questionnaireService {


    static async intializeQuestionnaire(currentUser: user): Promise<IQuestionnaireResponse> {
        return await axios.post(apis.INITIALIZE_QUESTIONNAIRE, { bearer_token: currentUser.access_token })
    }


}
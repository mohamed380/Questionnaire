
import { createStore } from "vuex";
import { rootGetters } from "./getters";
import { mutations } from "./mutations";
import { questionnaireModule } from "./questionnaire";
import { rootState } from "./state";
import { userModule } from "./users";

export const store = createStore({
    state: rootState,
    getters: rootGetters,
    mutations: mutations,
    modules : {
       user: userModule,
       questionnaire: questionnaireModule
    }
})
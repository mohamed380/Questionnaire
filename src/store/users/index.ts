import { userActions } from "./actions";
import { userGetters } from "./getter";
import { userMutations } from "./mutation";
import { userState } from "./state";


export const userModule = {
    state: userState,
    getters: userGetters,
    actions: userActions,
    mutations: userMutations
}
import type user from "@/models/user";
import type { MutationTree } from "vuex";
import type { IUserState } from "./types";


export const userMutations: MutationTree<IUserState> = {

    SET_USER(state: IUserState, user: user) {
        state.user = user
    },

    TOGGLE_CREATING_DUMMY(state: IUserState) {
        state.creatingDummy = !state.creatingDummy
    }
}
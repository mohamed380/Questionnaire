import user from "@/models/user";
import { userService } from "@/services/userService";
import type { ActionContext } from "vuex";
import type { ActionTree } from "vuex";
import type { IRootState } from "../types";
import type { IUserState } from "./types";


export const userActions: ActionTree<IUserState, IRootState> = {
    //@ts-ignore
    async createDummy({ commit, state }: ActionContext) {
        if (!state.user) {

            commit('TOGGLE_CREATING_DUMMY');
            //check localStorage availability 
            let currenctUser: user | null = userService.getUser()
            if (!currenctUser) {

                await userService.createDummy().then((dummyUserData) => {
                    let dummyUser: user = new user(dummyUserData);
                    userService.save(dummyUser);
                    commit('SET_USER', dummyUser);
                }).catch((res) => {
                    alert(res.message)
                });

            } else {

                commit('SET_USER', currenctUser);

            }

            commit('TOGGLE_CREATING_DUMMY');
        }
    },
    //@ts-ignore
    removeCurrentUser({ commit, state }: ActionContext) {
        userService.remove();
        commit('SET_USER', null)
    }

}
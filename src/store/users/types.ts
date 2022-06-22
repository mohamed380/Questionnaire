import type user from "@/models/user";

export interface IUserState{
    user?: user
    creatingDummy: boolean
}

export interface IUserGetters{
    currentUser(state: IUserState): user|undefined,
    isCreatingDummy(state: IUserState): boolean
}
import type { GetterTree } from 'vuex'
import type { IRootState } from '../types'
import type { IUserGetters, IUserState } from './types'

export const userGetters: GetterTree<IUserState, IRootState> & IUserGetters = {
    currentUser: (state: IUserState) => {
        return state.user
    },
    isCreatingDummy: (state: IUserState) => {
        return state.creatingDummy
    },
}

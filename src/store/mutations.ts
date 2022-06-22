import type { MutationTree } from "vuex";
import type { IRootState } from './types'


export const mutations: MutationTree<IRootState> = {
    TOGGLE_LOADING(state: IRootState) {
        state.loading = !state.loading
    }
}
import type { GetterTree } from 'vuex'
import type { IRootGetters, IRootState } from './types'

export const rootGetters: GetterTree<IRootState, IRootState> & IRootGetters= {
  visitsNo: (state: IRootState) => {
    return state.visits
  },
  isLoading: (state: IRootState) => {
    return state.loading;
  }
}
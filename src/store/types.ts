export interface IRootState {

    visits: number | null
    loading: boolean

}

export interface IRootGetters {
    visitsNo(state: IRootState): number | null;
    isLoading(state: IRootState): boolean;
}
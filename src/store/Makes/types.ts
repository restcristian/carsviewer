export const FETCH_MAKES = 'FETCH_MAKES';

interface IFetchMakeAction {
    type: typeof FETCH_MAKES;
    payload: string[];
}

export type MakesActionTypes = IFetchMakeAction;

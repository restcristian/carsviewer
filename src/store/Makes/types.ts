export const FETCH_MAKES = 'FETCH_MAKES';
export const FETCH_MAKES_SUCCESS = 'FETCH_MAKES_SUCCESS';
export const FETCH_MAKES_FAILED = 'FETCH_MAKES_FAILED';

export const UPDATE_CURRENT_MAKE = 'UPDATE_CURRENT_MAKE';

interface IFetchMakeAction {
    type: typeof FETCH_MAKES;
}

interface IFetchMakeSuccessAction {
    type: typeof FETCH_MAKES_SUCCESS;
    payload: string[];
}

interface IFetchMakeFailedsAction {
    type: typeof FETCH_MAKES_FAILED;
}

interface IUpdateCurrentMakeAction {
    type: typeof UPDATE_CURRENT_MAKE;
    payload: string;
}

export type MakesActionTypes =
    | IFetchMakeAction
    | IUpdateCurrentMakeAction
    | IFetchMakeSuccessAction
    | IFetchMakeFailedsAction;

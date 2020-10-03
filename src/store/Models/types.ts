export const FETCH_MODELS = 'FETCH_MODELS';
export const FETCH_MODELS_SUCCESS = 'FETCH_MODELS_SUCCESS';
export const FETCH_MODELS_FAILED = 'FETCH_MODELS_FAILED';

export const UPDATE_CURRENT_MODEL = 'UPDATE_CURRENT_MODEL';

interface IFetchModelsAction {
    type: typeof FETCH_MODELS;
}

interface IFetchModelsSuccessAction {
    type: typeof FETCH_MODELS_SUCCESS;
    payload: string[];
}

interface IFetchModelsFailedAction {
    type: typeof FETCH_MODELS_FAILED;
}

interface IUpdateCurrentMakeAction {
    type: typeof UPDATE_CURRENT_MODEL;
    payload: string;
}

export type ModelsActionTypes =
    | IFetchModelsAction
    | IUpdateCurrentMakeAction
    | IFetchModelsSuccessAction
    | IFetchModelsFailedAction;

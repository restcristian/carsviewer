import { ThunkAction } from 'redux-thunk';
import api from '../../api';
import { RootState } from '../reducers';
import {
    FETCH_MODELS,
    FETCH_MODELS_FAILED,
    FETCH_MODELS_SUCCESS,
    ModelsActionTypes,
    UPDATE_CURRENT_MODEL,
} from './types';

export const fetchModels = (make: string): ThunkAction<void, RootState, unknown, ModelsActionTypes> => async (
    dispatch,
) => {
    try {
        dispatch({ type: FETCH_MODELS });

        const response = await api.get('/models', {
            params: {
                make,
            },
        });
        dispatch({
            type: FETCH_MODELS_SUCCESS,
            payload: response.data,
        });
    } catch (error) {
        dispatch({
            type: FETCH_MODELS_FAILED,
        });
    }
};

export const updateCurrentModel = (model: string): ModelsActionTypes => ({
    type: UPDATE_CURRENT_MODEL,
    payload: model,
});

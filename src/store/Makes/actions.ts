import { ThunkAction } from 'redux-thunk';
import api from '../../api';
import { FETCH_MAKES, FETCH_MAKES_FAILED, FETCH_MAKES_SUCCESS, MakesActionTypes, UPDATE_CURRENT_MAKE } from './types';
import { RootState } from '../reducers';

export const fetchMakes = (): ThunkAction<void, RootState, unknown, MakesActionTypes> => async (dispatch) => {
    try {
        dispatch({ type: FETCH_MAKES });
        const response = await api.get('/makes');
        dispatch({
            type: FETCH_MAKES_SUCCESS,
            payload: response.data,
        });
    } catch (error) {
        dispatch({
            type: FETCH_MAKES_FAILED,
        });
    }
};

export const updateCurrentMake = (make: string): MakesActionTypes => ({ type: UPDATE_CURRENT_MAKE, payload: make });

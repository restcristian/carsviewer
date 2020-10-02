import { ThunkAction } from 'redux-thunk';
import api from '../../api';
import { FETCH_MAKES, MakesActionTypes } from './types';
import { RootState } from '../reducers';

export const fetchMakes = (): ThunkAction<void, RootState, unknown, MakesActionTypes> => async (dispatch) => {
    const response = await api.get('/makes');
    dispatch({
        type: FETCH_MAKES,
        payload: response.data,
    });
};

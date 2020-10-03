import { ThunkAction } from 'redux-thunk';
import api from '../../api';
import { RootState } from '../reducers';
import { IVehicle } from './reducers';
import {
    FETCH_VEHICLES,
    FETCH_VEHICLES_FAILED,
    FETCH_VEHICLES_SUCCESS,
    UPDATE_CURRENT_VEHICLE,
    VehiclesActionTypes,
} from './types';

export const fetchVehicles = (
    make: string,
    model: string,
): ThunkAction<void, RootState, unknown, VehiclesActionTypes> => async (dispatch) => {
    try {
        dispatch({ type: FETCH_VEHICLES });
        const response = await api.get('/vehicles', {
            params: {
                make,
                model,
            },
        });
        dispatch({
            type: FETCH_VEHICLES_SUCCESS,
            payload: response.data,
        });
    } catch (error) {
        dispatch({
            type: FETCH_VEHICLES_FAILED,
        });
    }
};

export const updateCurrentVehidle = (vehicle: IVehicle): VehiclesActionTypes => ({
    type: UPDATE_CURRENT_VEHICLE,
    payload: vehicle,
});

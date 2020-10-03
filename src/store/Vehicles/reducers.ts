import {
    FETCH_VEHICLES,
    FETCH_VEHICLES_FAILED,
    FETCH_VEHICLES_SUCCESS,
    UPDATE_CURRENT_VEHICLE,
    VehiclesActionTypes,
} from './types';

export interface IVehicle {
    make: string;
    model: string;
    enginePowerPS: number;
    enginePowerKW: number;
    fuelType: string;
    bodyType: string;
    engineCapacity: number;
}
export interface IVehiclesState {
    vehicles: IVehicle[];
    currentVehicle: IVehicle | null;
    isLoading: boolean;
    hasError: boolean;
}

const initialState: IVehiclesState = {
    vehicles: [],
    currentVehicle: null,
    isLoading: false,
    hasError: false,
};

const reducers = (state = initialState, action: VehiclesActionTypes): IVehiclesState => {
    switch (action.type) {
        case FETCH_VEHICLES:
            return {
                ...state,
                isLoading: true,
                hasError: false,
                currentVehicle: null,
            };
        case FETCH_VEHICLES_SUCCESS:
            return {
                ...state,
                isLoading: false,
                hasError: false,
                currentVehicle: null,
                vehicles: [...action.payload],
            };
        case FETCH_VEHICLES_FAILED:
            return {
                ...state,
                isLoading: false,
                hasError: true,
                currentVehicle: null,
            };
        case UPDATE_CURRENT_VEHICLE:
            return {
                ...state,
                currentVehicle: action.payload,
            };
        default:
            return state;
    }
};

export default reducers;

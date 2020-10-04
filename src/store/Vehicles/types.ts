import { IVehicle } from './reducers';

export const FETCH_VEHICLES = 'FETCH_VEHICLES';
export const FETCH_VEHICLES_SUCCESS = 'FETCH_VEHICLES_SUCCESS';
export const FETCH_VEHICLES_FAILED = 'FETCH_VEHICLES_FAILED';

export const UPDATE_CURRENT_VEHICLE = 'UPDATE_CURRENT_VEHICLE';

interface IFetchVehiclesAction {
    type: typeof FETCH_VEHICLES;
}

interface IFetchVehiclesSuccessAction {
    type: typeof FETCH_VEHICLES_SUCCESS;
    payload: IVehicle[];
}

interface IFetchVehiclesFailedAction {
    type: typeof FETCH_VEHICLES_FAILED;
}

interface IUpdateCurrentVehicleAction {
    type: typeof UPDATE_CURRENT_VEHICLE;
    payload: IVehicle;
}

export type VehiclesActionTypes =
    | IFetchVehiclesAction
    | IFetchVehiclesSuccessAction
    | IFetchVehiclesFailedAction
    | IUpdateCurrentVehicleAction;

import React from 'react';
import { render, cleanup, wait } from '@testing-library/react';
import vehiclesReducer from '../../store/Vehicles';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import store, { composeEnhancers, middleware } from '../../store';
import VehicleList from './index';
import { IVehicle, IVehiclesState } from '../../store/Vehicles/reducers';
import reducers from '../../store/reducers';

jest.mock('../../api');

describe('<VehicleList/>', () => {
    let vehicles: IVehicle[] = [
        {
            make: 'FORD',
            model: 'B-MAX',
            bodyType: '232',
            engineCapacity: 22,
            enginePowerKW: 22,
            enginePowerPS: 22,
            fuelType: 'Diesel',
        },
        {
            make: 'FORD',
            model: 'C-MAX',
            bodyType: '232',
            engineCapacity: 22,
            enginePowerKW: 22,
            enginePowerPS: 22,
            fuelType: 'Diesel',
        },
    ];
    beforeEach(() => cleanup());

    it('Should render without issues when there are vehicles on store.', async () => {
        const initialState: any = {
            ...store.getState(),
            [vehiclesReducer.name]: {
                vehicles,
            },
        };
        const tempStore = createStore(reducers, initialState, composeEnhancers(middleware));

        const { getByTestId } = render(
            <Provider store={tempStore}>
                <VehicleList />
            </Provider>,
        );
        await wait(() => {
            const vehicleList = getByTestId('vehicle-list');
            expect(vehicleList).toBeDefined();
        });
    });
    it('Should not render vehicles when there are not in the store', async () => {
        const initialState: any = {
            ...store.getState(),
            [vehiclesReducer.name]: {
                vehicles: [],
            },
        };
        const tempStore = createStore(reducers, initialState, composeEnhancers(middleware));

        const { getByTestId } = render(
            <Provider store={tempStore}>
                <VehicleList />
            </Provider>,
        );
        await wait(() => {
            const noVehiclesHeader = getByTestId('header-vehicles-no-vehicles');
            expect(noVehiclesHeader).toBeDefined();
        });
    });
    it('Should track error if there is a problem with the endpoint', async () => {
        const initialState: any = {
            ...store.getState(),
            [vehiclesReducer.name]: {
                vehicles: [],
                hasError: true,
            },
        };
        const tempStore = createStore(reducers, initialState, composeEnhancers(middleware));

        const { getByTestId } = render(
            <Provider store={tempStore}>
                <VehicleList />
            </Provider>,
        );
        await wait(() => {
            const { hasError }: IVehiclesState = tempStore.getState()[vehiclesReducer.name];
            expect(hasError).toBe(true);
        });
    });
});

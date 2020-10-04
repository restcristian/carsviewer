import React from 'react';
import { render, cleanup, wait, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../../../store';
import FilterMake from './index';

import makesReducer from '../../../store/Makes';
import { IMakesState } from '../../../store/Makes/reducers';
import api from '../../../api';

jest.mock('../../../api');

const mockedAPI = api as jest.Mocked<typeof api>;

describe('<FilterMake/>', () => {
    beforeEach(() => {
        cleanup();
    });

    it('Should render without issues', async () => {
        const { getByTestId } = render(
            <Provider store={store}>
                <FilterMake />
            </Provider>,
        );
        const select = getByTestId('filter-make');
        expect(select).toBeDefined();
    });

    it('Should update Makes in store', async () => {
        mockedAPI.get.mockReturnValue(Promise.resolve({ data: ['BMW', 'AUDI', 'MERCEDES'] }));

        const { getByTestId } = render(
            <Provider store={store}>
                <FilterMake />
            </Provider>,
        );

        await wait(() => {
            const { makes }: IMakesState = store.getState()[makesReducer.name];

            expect(makes.length).toBe(3);
        });
    });

    it('Should change current Make when user selects', async () => {
        mockedAPI.get.mockReturnValue(Promise.resolve({ data: ['BMW', 'AUDI', 'MERCEDES'] }));
        const { getByTestId } = render(
            <Provider store={store}>
                <FilterMake />
            </Provider>,
        );

        await wait(() => {
            const select = getByTestId('filter-make').querySelector('.CustomSelect');
            // Press enter on select
            fireEvent.keyDown(select as Element, { keyCode: 13 });
            // Go down on dropdown one time
            fireEvent.keyDown(select as Element, { key: 'ArrowDown', code: 40 });
            // Submit element
            fireEvent.keyDown(select as Element, { keyCode: 13 });

            const { currentMake }: IMakesState = store.getState()[makesReducer.name];

            expect(currentMake).toBe('BMW');
        });
    });

    it('Should track error from request', async () => {
        mockedAPI.get.mockReturnValue(Promise.reject({ statusCode: 500 }));

        const { getByTestId } = render(
            <Provider store={store}>
                <FilterMake />
            </Provider>,
        );

        await wait(() => {
            const { hasError }: IMakesState = store.getState()[makesReducer.name];

            expect(hasError).toBe(true);
        });
    });
});

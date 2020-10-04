import React from 'react';
import { render, cleanup, wait, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../../../store';
import FilterModel from './index';
import modelsReducer from '../../../store/Models';
import { IModelsState } from '../../../store/Models/reducers';
import { updateCurrentMake } from '../../../store/Makes/actions';
import api from '../../../api';

jest.mock('../../../api');

const mockedAPI = api as jest.Mocked<typeof api>;

describe('<FilterModel/>', () => {
    beforeEach(() => {
        cleanup();
    });

    it('Should render without issues', async () => {
        const { getByTestId } = render(
            <Provider store={store}>
                <FilterModel />
            </Provider>,
        );
        const select = getByTestId('filter-model');
        expect(select).toBeDefined();
    });

    it('Should update Models in store when currentMake is available ', async () => {
        store.dispatch(updateCurrentMake('FORD'));
        mockedAPI.get.mockReturnValue(Promise.resolve({ data: ['C-MAX', 'B-MAX'] }));

        const { getByTestId } = render(
            <Provider store={store}>
                <FilterModel />
            </Provider>,
        );

        await wait(() => {
            const { models }: IModelsState = store.getState()[modelsReducer.name];

            expect(models.length).toBe(2);
        });
    });

    it('Should change current Model when user selects', async () => {
        mockedAPI.get.mockReturnValue(Promise.resolve({ data: ['C-MAX', 'B-MAX'] }));
        store.dispatch(updateCurrentMake('FORD'));

        const { getByTestId } = render(
            <Provider store={store}>
                <FilterModel />
            </Provider>,
        );

        await wait(() => {
            const select = getByTestId('filter-model').querySelector('.CustomSelect');
            // Press enter on select
            fireEvent.keyDown(select as Element, { keyCode: 13 });
            // Go down on dropdown one time
            fireEvent.keyDown(select as Element, { key: 'ArrowDown', code: 40 });
            // Submit element
            fireEvent.keyDown(select as Element, { keyCode: 13 });

            const { currentModel }: IModelsState = store.getState()[modelsReducer.name];

            expect(currentModel).toBe('C-MAX');
        });
    });

    it('Should track error from request', async () => {
        mockedAPI.get.mockReturnValue(Promise.reject({ statusCode: 500 }));

        const { getByTestId } = render(
            <Provider store={store}>
                <FilterModel />
            </Provider>,
        );

        await wait(() => {
            const { hasError }: IModelsState = store.getState()[modelsReducer.name];

            expect(hasError).toBe(true);
        });
    });
});

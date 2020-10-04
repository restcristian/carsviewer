import React from 'react';
import { render, cleanup, wait } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../../store';
import { updateCurrentMake } from '../../store/Makes/actions';
import { updateCurrentModel } from '../../store/Models/actions';

import FiltersForm from './index';
import api from '../../api';

jest.mock('../../api');

const mockedAPI = api as jest.Mocked<typeof api>;

describe('<FilterForm/>', () => {
    beforeEach(() => cleanup());

    it('Should render without errors', () => {
        const { getByTestId } = render(
            <Provider store={store}>
                <FiltersForm />
            </Provider>,
        );

        const filterForm = getByTestId('filter-form');

        expect(filterForm).toBeDefined();
    });

    it('Should NOT allow submission if make and/or model are undefined', async () => {
        const { getByTestId } = render(
            <Provider store={store}>
                <FiltersForm />
            </Provider>,
        );
        store.dispatch(updateCurrentMake('FORD'));

        await wait(() => {
            const submitButton = getByTestId('filter-form').querySelector('button[type="submit"]');
            expect(submitButton).toBeDisabled();
        });

        store.dispatch(updateCurrentMake(''));
        store.dispatch(updateCurrentModel('C-MAX'));

        await wait(() => {
            const submitButton = getByTestId('filter-form').querySelector('button[type="submit"]');
            expect(submitButton).toBeDisabled();
        });
    });
});

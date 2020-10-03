import React, { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/reducers';
import makesReducer from '../../store/Makes';
import modelsReducer from '../../store/Models';
import vehiclesReducer from '../../store/Vehicles';
import FilterMake from './FilterMake';
import FilterModel from './FilterModel';
import { IMakesState } from '../../store/Makes/reducers';
import { IModelsState } from '../../store/Models/reducers';
import { fetchVehicles } from '../../store/Vehicles/actions';
import ErrorModal from '../ErrorModal';
import { IVehiclesState } from '../../store/Vehicles/reducers';

const FiltersForm: FC = () => {
    const { hasError: makesHasError, isLoading: makesIsLoading, currentMake } = useSelector(
        (state: RootState): IMakesState => state[makesReducer.name],
    );
    const { hasError: modelHasError, isLoading: modelIsLoading, currentModel } = useSelector(
        (state: RootState): IModelsState => state[modelsReducer.name],
    );

    const { hasError: vehiclesHasError, isLoading: vehiclesIsLoading } = useSelector(
        (state: RootState): IVehiclesState => state[vehiclesReducer.name],
    );

    const dispatch = useDispatch();

    const disableButton = () =>
        modelHasError || makesHasError || modelIsLoading || makesIsLoading || !currentModel || !currentMake;

    const getVehicles = () => dispatch(fetchVehicles(currentMake || '', currentModel || ''));

    return (
        <>
            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    getVehicles();
                }}
            >
                <FilterMake />
                <FilterModel />
                <button type="submit" disabled={disableButton()}>
                    Search Your Vehicle
                </button>
            </form>
            <ErrorModal hasError={vehiclesHasError} message="Error while fetching Vehicles" onConfirm={getVehicles} />
        </>
    );
};

export default FiltersForm;

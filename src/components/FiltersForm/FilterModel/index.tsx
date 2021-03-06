import React, { FC, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchModels, updateCurrentModel } from '../../../store/Models/actions';
import makesReducer from '../../../store/Makes';
import modelsReducer from '../../../store/Models';
import { IMakesState } from '../../../store/Makes/reducers';
import { IModelsState } from '../../../store/Models/reducers';
import { RootState } from '../../../store/reducers';
import Select from '../../UI/Select';
import ErrorModal from '../../ErrorModal';
import { IOption } from '../../UI/Select/types';

const FilterModel: FC = () => {
    const dispatch = useDispatch();
    const { models, currentModel, hasError, isLoading } = useSelector(
        (state: RootState): IModelsState => state[modelsReducer.name],
    );
    const { currentMake } = useSelector((state: RootState): IMakesState => state[makesReducer.name]);

    useEffect(() => {
        getModels();
    }, [dispatch, currentMake]);

    const getModels = () => {
        if (currentMake) {
            dispatch(fetchModels(currentMake));
            dispatch(updateCurrentModel(''));
        }
    };

    const getOptions = (): IOption[] => models.map((model) => ({ label: model, value: model }));

    const getCurrentOption = (): IOption | null => (currentModel ? { label: currentModel, value: currentModel } : null);

    const hasModels = models.length > 0;

    const isDisabled = () => isLoading || hasError || !hasModels;

    const onModelChangeHandler = (model: IOption | any) => {
        dispatch(updateCurrentModel(model.value));
    };

    const getPlaceHolder = () => (hasModels ? 'Select Model' : 'No models available for this mark.');

    return (
        <div data-testid="filter-model">
            <Select
                isLoading={isLoading}
                isDisabled={isDisabled()}
                options={getOptions()}
                onChange={onModelChangeHandler}
                value={getCurrentOption()}
                placeholder={getPlaceHolder()}
            />
            <ErrorModal hasError={hasError} message="Error while fetching models" onConfirm={() => getModels()} />
        </div>
    );
};

export default FilterModel;

import React, { FC, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchMakes, updateCurrentMake } from '../../../store/Makes/actions';
import makesReducer from '../../../store/Makes';
import { IMakesState } from '../../../store/Makes/reducers';
import { RootState } from '../../../store/reducers';
import Select from '../../UI/Select';
import ErrorModal from '../../ErrorModal';
import { IOption } from '../../UI/Select/types';

const FilterMake: FC = () => {
    const dispatch = useDispatch();
    const { makes, currentMake, isLoading, hasError } = useSelector(
        (state: RootState): IMakesState => state[makesReducer.name],
    );

    useEffect(() => {
        dispatch(fetchMakes());
    }, [dispatch]);

    const getOptions = (): IOption[] => makes.map((make) => ({ label: make, value: make }));

    const getCurrentOption = (): IOption | null => (currentMake ? { label: currentMake, value: currentMake } : null);

    const hasMakes = makes.length > 0;

    const isDisabled = () => isLoading || hasError || !hasMakes;

    const getPlaceHolder = () => (hasMakes ? 'Select Make' : 'No makes available at the moment');

    const onMakeChangeHandler = (make: IOption | any) => {
        dispatch(updateCurrentMake(make.value));
    };

    return (
        <div data-testid="filter-make">
            <Select
                isLoading={isLoading}
                isDisabled={isDisabled()}
                options={getOptions()}
                onChange={onMakeChangeHandler}
                value={getCurrentOption()}
                placeholder={getPlaceHolder()}
            />
            <ErrorModal
                hasError={hasError}
                message={'Error while fetching makes'}
                onConfirm={() => dispatch(fetchMakes())}
            />
        </div>
    );
};

export default FilterMake;

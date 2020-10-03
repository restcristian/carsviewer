import React, { FC, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchMakes, updateCurrentMake } from '../../../store/Makes/actions';
import makesReducer from '../../../store/Makes';
import { IMakesState } from '../../../store/Makes/reducers';
import { RootState } from '../../../store/reducers';
import Select from 'react-select';

interface Option {
    label: string;
    value: string;
}
const FilterMake: FC = () => {
    const dispatch = useDispatch();
    const { makes, currentMake, isLoading, hasError } = useSelector(
        (state: RootState): IMakesState => state[makesReducer.name],
    );

    useEffect(() => {
        dispatch(fetchMakes());
    }, [dispatch]);

    const getOptions = (): Option[] => makes.map((make) => ({ label: make, value: make }));

    const getCurrentOption = (): Option | null => (currentMake ? { label: currentMake, value: currentMake } : null);

    const hasMakes = makes.length > 0;

    const isDisabled = () => isLoading || hasError || !hasMakes;

    const getPlaceHolder = () => (hasMakes ? 'Select Make' : 'No makes available at the moment');

    const onMakeChangeHandler = (make: Option | any) => {
        dispatch(updateCurrentMake(make.value));
    };

    return (
        <div>
            <Select
                isLoading={isLoading}
                isDisabled={isDisabled()}
                options={getOptions()}
                onChange={onMakeChangeHandler}
                value={getCurrentOption()}
                placeholder={getPlaceHolder()}
            />
            {hasError && 'Dude with have an error'}
        </div>
    );
};

export default FilterMake;

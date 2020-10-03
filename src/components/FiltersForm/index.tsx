import React, { FC } from 'react';
import FilterMake from './FilterMake';
import FilterModel from './FilterModel';

interface Props {
    onFormSubmit: () => void;
}
const FiltersForm: FC<Props> = ({ onFormSubmit }) => {
    return (
        <form
            onSubmit={(e) => {
                e.preventDefault();
                onFormSubmit();
            }}
        >
            <FilterMake />
            <FilterModel />
            <button type="submit">Submit</button>
        </form>
    );
};

export default FiltersForm;

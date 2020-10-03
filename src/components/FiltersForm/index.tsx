import React, { FC } from 'react';
import FilterMake from './FilterMake';

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
            <button type="submit">Submit</button>
        </form>
    );
};

export default FiltersForm;

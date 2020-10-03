import React, { FC } from 'react';
import { IOption } from './types';
import ReactSelect from 'react-select';
import './Select.scss';

interface SelectProps {
    isLoading: boolean;
    isDisabled: boolean;
    options: IOption[];
    value: IOption | null;
    placeholder: string;
    onChange: (make: IOption | any) => void;
}

const Select: FC<SelectProps> = ({ isLoading, isDisabled, options, value, placeholder, onChange }) => {
    return (
        <ReactSelect
            className="CustomSelect"
            isLoading={isLoading}
            isDisabled={isDisabled}
            options={options}
            onChange={onChange}
            value={value}
            placeholder={placeholder}
        />
    );
};

export default Select;

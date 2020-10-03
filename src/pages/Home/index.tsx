import React, { FC } from 'react';
import FiltersForm from '../../components/FiltersForm';

const Home: FC = () => {
    return (
        <>
            <FiltersForm
                onFormSubmit={() => {
                    console.log('search');
                }}
            />
        </>
    );
};

export default Home;

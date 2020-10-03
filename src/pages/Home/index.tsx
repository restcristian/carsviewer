import React, { FC } from 'react';
import Page from '../../components/UI/Page/Page';
import VehicleList from '../../components/VehicleList';

const Home: FC = () => {
    return (
        <Page>
            <VehicleList />
        </Page>
    );
};

export default Home;

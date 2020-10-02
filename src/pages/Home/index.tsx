import React, { FC, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchMakes } from '../../store/Makes/actions';
import makesReducer from '../../store/Makes';
import { IMakesState } from '../../store/Makes/reducers';
import { RootState } from '../../store/reducers';

const Home: FC = () => {
    const dispatch = useDispatch();
    const { makes } = useSelector((state: RootState): IMakesState => state[makesReducer.name]);

    useEffect(() => {
        dispatch(fetchMakes());
    }, [dispatch]);

    return (
        <ul>
            {makes.map((make) => {
                return <li key={make}>{make}</li>;
            })}
        </ul>
    );
};

export default Home;

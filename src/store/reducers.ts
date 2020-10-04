import { combineReducers } from 'redux';
import makesReducer from './Makes';
import modelsReducer from './Models';
import vehiclesReducer from './Vehicles';

const reducers = combineReducers({
    [makesReducer.name]: makesReducer.reducers,
    [modelsReducer.name]: modelsReducer.reducers,
    [vehiclesReducer.name]: vehiclesReducer.reducers,
});

export type RootState = ReturnType<typeof reducers>;

export default reducers;

import { combineReducers } from 'redux';
import makesReducer from './Makes';

const reducers = combineReducers({
    [makesReducer.name]: makesReducer.reducers,
});

export type RootState = ReturnType<typeof reducers>;

export default reducers;

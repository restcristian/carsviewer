import { combineReducers } from 'redux';
import makesReducer from './Makes';
import modelsReducer from './Models';

const reducers = combineReducers({
    [makesReducer.name]: makesReducer.reducers,
    [modelsReducer.name]: modelsReducer.reducers,
});

export type RootState = ReturnType<typeof reducers>;

export default reducers;

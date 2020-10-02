import { FETCH_MAKES, MakesActionTypes } from './types';

export interface IMakesState {
    makes: string[];
}

const initialState: IMakesState = {
    makes: [],
};

const reducers = (state = initialState, action: MakesActionTypes): IMakesState => {
    switch (action.type) {
        case FETCH_MAKES:
            return {
                makes: [...action.payload],
            };
        default:
            return state;
    }
};

export default reducers;

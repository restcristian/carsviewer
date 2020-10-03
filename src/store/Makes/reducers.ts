import { FETCH_MAKES, FETCH_MAKES_FAILED, FETCH_MAKES_SUCCESS, MakesActionTypes, UPDATE_CURRENT_MAKE } from './types';

export interface IMakesState {
    makes: string[];
    currentMake: string | null;
    isLoading: boolean;
    hasError: boolean;
}

const initialState: IMakesState = {
    makes: [],
    currentMake: null,
    isLoading: false,
    hasError: false,
};

const reducers = (state = initialState, action: MakesActionTypes): IMakesState => {
    switch (action.type) {
        case FETCH_MAKES:
            return {
                ...state,
                isLoading: true,
                hasError: false,
            };

        case FETCH_MAKES_SUCCESS:
            return {
                ...state,
                isLoading: false,
                hasError: false,
                makes: [...action.payload],
            };
        case FETCH_MAKES_FAILED:
            return {
                ...state,
                isLoading: false,
                hasError: true,
            };

        case UPDATE_CURRENT_MAKE:
            return {
                ...state,
                currentMake: action.payload,
            };
        default:
            return state;
    }
};

export default reducers;

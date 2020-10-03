import {
    FETCH_MODELS,
    FETCH_MODELS_FAILED,
    FETCH_MODELS_SUCCESS,
    ModelsActionTypes,
    UPDATE_CURRENT_MODEL,
} from './types';

export interface IModelsState {
    models: string[];
    currentModel: string | null;
    isLoading: boolean;
    hasError: boolean;
}

const initialState: IModelsState = {
    models: [],
    currentModel: null,
    isLoading: false,
    hasError: false,
};

const reducers = (state = initialState, action: ModelsActionTypes): IModelsState => {
    switch (action.type) {
        case FETCH_MODELS:
            return {
                ...state,
                isLoading: true,
                hasError: false,
            };
        case FETCH_MODELS_SUCCESS:
            return {
                ...state,
                isLoading: false,
                hasError: false,
                models: [...action.payload],
            };
        case FETCH_MODELS_FAILED:
            return {
                ...state,
                isLoading: false,
                hasError: true,
            };
        case UPDATE_CURRENT_MODEL:
            return {
                ...state,
                currentModel: action.payload,
            };
    }
    return state;
};

export default reducers;

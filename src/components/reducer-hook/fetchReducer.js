import actionTypes from "../custom-hook/actionTypes";

export const initialFetchState = {
    isLoading: false,
    error: null
};

export default function fetchReducer(state, action) {
    switch (action.type) {
        case actionTypes.fetchStart: {
            return {
                isLoading: true,
                error: null
            };
        }

        case actionTypes.fetchSuccess: {
            return {
                isLoading: false,
                error: null
            };
        }

        case actionTypes.fetchError: {
            return {
                isLoading: false,
                error: action.payload
            };
        }

        case actionTypes.fetchEnd: { return {...state}; }

        default: { return {state}; }
    }
}
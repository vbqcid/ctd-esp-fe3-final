import { createContext, useReducer, useMemo } from 'react';

// Initial state
export const initialState = { theme: 'light', data: [], favs: [] };

// Action types
const actionTypes = {
    TOGGLE_THEME: 'TOGGLE_THEME',
    SET_DATA: 'SET_DATA',
    ADD_FAV: 'ADD_FAV',
    REMOVE_FAV: 'REMOVE_FAV',
};

// Reducer to manage global state
const reducer = (state, action) => {
    switch (action.type) {
        case actionTypes.TOGGLE_THEME:
            return { ...state, theme: state.theme === 'light' ? 'dark' : 'light' };
        case actionTypes.SET_DATA:
            return { ...state, data: action.payload };
        case actionTypes.ADD_FAV:
            return { ...state, favs: [...state.favs, action.payload] };
        case actionTypes.REMOVE_FAV:
            return { ...state, favs: state.favs.filter(fav => fav.id !== action.payload.id) };
        default:
            return state;
    }
};

// Create context
export const ContextGlobal = createContext();

// Provider for the context
export const ContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    
    // Memoization of values to avoid unnecessary renders
    const contextValue = useMemo(() => ({ state, dispatch }), [state, dispatch]);
    
    return (
        <ContextGlobal.Provider value={contextValue}>
            {children}
        </ContextGlobal.Provider>
    );
};
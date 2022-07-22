import { combineReducers, configureStore, PreloadedState } from '@reduxjs/toolkit';
import { mockyApi } from '../services/api';
import mazeReducer from './maze/mazeSlice';

// Create the root reducer separately so we can extract the RootState type
const rootReducer = combineReducers({
    maze: mazeReducer,
    [mockyApi.reducerPath]: mockyApi.reducer,

})

export const setupStore = (preloadedState?: PreloadedState<RootState>) => {
    return configureStore({
        reducer: rootReducer,
        middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(mockyApi.middleware),
        preloadedState
    })
}

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']
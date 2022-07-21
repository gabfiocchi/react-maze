import { combineReducers, configureStore, PreloadedState } from '@reduxjs/toolkit';
import mazeReducer from './maze/mazeSlice';
// export const AppStore = configureStore({
//     reducer: {
//         maze: mazeReducer,
//     },
// });
// Create the root reducer separately so we can extract the RootState type
const rootReducer = combineReducers({
    maze: mazeReducer
})

export const setupStore = (preloadedState?: PreloadedState<RootState>) => {
    return configureStore({
        reducer: rootReducer,
        preloadedState
    })
}

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']
import { configureStore } from '@reduxjs/toolkit';
import mazeReducer from './maze/mazeSlice';
export const store = configureStore({
    reducer: {
        maze: mazeReducer,
    },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
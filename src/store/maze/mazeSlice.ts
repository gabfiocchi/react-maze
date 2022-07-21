import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

export interface Position {
    x: number;
    y: number;
}
export interface MazeState {
    moves: number;
    maze: number[][];
    loaded: boolean;
    finished: boolean;
    start: Position;
    end: Position;
    avatar: Position;
}

export const initialMazeState: MazeState = {
    moves: 0,
    finished: false,
    maze: [
        [1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,],
        [1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 1,],
        [1, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 1,],
        [1, 1, 1, 1, 1, 0, 0, 0, 1, 0, 0, 1,],
        [1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 1,],
        [1, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1,],
        [1, 0, 0, 0, 0, 0, 1, 0, 1, 1, 1, 1,],
        [1, 1, 1, 0, 1, 0, 1, 0, 0, 0, 0, 1,],
        [1, 0, 0, 0, 1, 0, 1, 1, 1, 1, 1, 1,],
        [1, 1, 0, 1, 1, 0, 1, 0, 0, 0, 1, 1,],
        [1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0,],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,],
    ],
    loaded: false,
    start: {
        x: 1,
        y: 0,
    },
    end: {
        x: 12,
        y: 10,
    },
    avatar: {
        x: 1,
        y: 0,
    },
};

export const mazeSlice = createSlice({
    name: 'maze',
    initialState: initialMazeState,
    reducers: {
        loaded: (state, action: PayloadAction<boolean>) => {
            state.loaded = action.payload;
        },
        restart: (state) => {
            state.avatar = initialMazeState.avatar;
            state.moves = initialMazeState.moves;
            state.maze = initialMazeState.maze;
            state.finished = initialMazeState.finished;
        },
        increment: (state) => {
            state.moves += 1;
        },
        endGame: (state) => {
            state.finished = true;
        },
        moveAvatar: (state, action: PayloadAction<string>) => {
            switch (action.payload) {
                case 'up':
                    state.avatar.y -= 1;
                    break;
                case 'down':
                    state.avatar.y += 1;
                    break;
                case 'left':
                    state.avatar.x -= 1;
                    break;
                case 'right':
                    state.avatar.x += 1;
                    break;
            }
        }
    },
})

// Action creators are generated for each case reducer function
export const { loaded, restart, increment, moveAvatar, endGame } = mazeSlice.actions;

export default mazeSlice.reducer;
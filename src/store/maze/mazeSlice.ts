import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface Position {
    x: number;
    y: number;
}
export interface MazeState {
    moves: number;
    maze: number[][];
    loaded: boolean;
    start: Position;
    end: Position;
    avatar: Position;
}

const initialState: MazeState = {
    moves: 0,
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
        y: 11,
    },
    avatar: {
        x: 1,
        y: 0,
    }
}

export const mazeSlice = createSlice({
    name: 'maze',
    initialState,
    reducers: {
        loaded: (state, action: PayloadAction<boolean>) => {
            state.loaded = action.payload;
        },
        restart: (state) => {
            state.avatar = initialState.avatar;
            state.maze = initialState.maze;
        },
        increment: (state) => {
            state.moves += 1
        },
        moveAvatar: (state, action: PayloadAction<string>) => {
            console.log('action', action.payload);
            console.log('state', state.avatar.x)
            console.log('state', state.avatar.y)
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
                default:
                    break;
            }
        }
    },
})

// Action creators are generated for each case reducer function
export const { loaded, restart, increment, moveAvatar } = mazeSlice.actions;

export default mazeSlice.reducer;